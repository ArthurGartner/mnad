import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SiteDown } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  const [theme, setTheme] = useState("system");
  const siteDown = false;

  //Dark and light theme setup for entire background
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    mq.addEventListener("change", (evt) => {
      updateTheme();
    });

    if (localStorage.getItem("theme") != null) {
      setTheme(localStorage.getItem("theme"));
    }

    updateTheme();
  }, []);

  useEffect(() => {
    updateTheme();
  }, [theme]);

  const updateTheme = () => {
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
    document.documentElement.classList.add("dark");
  };
  const lightMode = () => {
    document.documentElement.classList.remove("dark");
  };

  return (
    <div>
      {(function () {
        if (siteDown) {
          return <SiteDown />;
        } else {
          return (
            <BrowserRouter>
              <Navbar setTheme={(setTheme, theme)} />
            </BrowserRouter>
          );
        }
      })()}
      <Footer />
    </div>
  );
}

export default App;
