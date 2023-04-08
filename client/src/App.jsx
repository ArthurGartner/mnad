import React, { useState, useEffect } from "react";
import { SiteDown } from "./pages";
import { Footer } from "./components";

function App() {
  const [isDark, setIsDark] = useState(false);

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
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  };
  const lightMode = () => {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  };

  return (
    <div>
      <SiteDown />
      <Footer />
    </div>
  );
}

export default App;
