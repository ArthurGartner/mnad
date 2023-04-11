import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SiteDown } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [darkTheme, setDarkTheme] = useState(false);
  const siteDown = false;

  //Dark and light theme setup for entire background
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    mq.addEventListener("change", () => {
      updateTheme();
    });
  }, []);

  useEffect(() => {
    updateTheme();
  }, [theme]);

  const updateTheme = () => {
    localStorage.setItem("theme", theme);
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.matches) {
        darkMode();
      } else lightMode();
    } else if (theme === "dark") {
      darkMode();
    } else {
      lightMode();
    }
  };

  const darkMode = () => {
    setDarkTheme(true);
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  };
  const lightMode = () => {
    setDarkTheme(false);
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  };

  return (
    <div>
      {(function () {
        if (siteDown) {
          return <SiteDown />;
        } else {
          return (
            <BrowserRouter>
              <Navbar setTheme={setTheme} darkTheme={darkTheme} theme={theme} />
            </BrowserRouter>
          );
        }
      })()}
      <Footer />
    </div>
  );
}

export default App;
