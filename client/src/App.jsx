import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SiteDown } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  const [isDark, setIsDark] = useState(false);
  const siteDown = false;

  //Dark and light theme setup for entire background
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (mq.matches) {
      setIsDark(true);
    }

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);

  useEffect(() => {
    if (isDark) lightMode();
    else darkMode();
  }, [isDark]);

  const darkMode = () => {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  };
  const lightMode = () => {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  };

  return (
    <div>
      {(function () {
        if (siteDown) {
          return <SiteDown />;
        } else {
          return (
            <BrowserRouter>
              <Navbar />
            </BrowserRouter>
          );
        }
      })()}
      <Footer />
    </div>
  );
}

export default App;
