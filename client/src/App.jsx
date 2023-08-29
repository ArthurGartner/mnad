import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SiteDown } from "./pages";
import {
  Articles,
  DaySummary,
  DrinkCarousel,
  Footer,
  Header,
  LoadingBar,
  Navbar,
} from "./components";

import { getCurrentDateString } from "../util/functions";
import { base_api, getRandomDrink } from "../util/constants";
import { reduceDateByOneDay, addOneDayToDate } from "../util/functions";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [darkTheme, setDarkTheme] = useState(false);
  const siteDown = false;
  const [date, setDate] = useState(null);
  const [sentimentVal, setSentimentVal] = useState(0);
  const [curDrink, setCurDrink] = useState(null);

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

  //Dark and light theme setup for entire background
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    mq.addEventListener("change", () => {
      updateTheme();
    });

    //Set date to today
    setDate(getCurrentDateString());

    //Set sentiment
    setSentimentVal(50);
  }, []);

  useEffect(() => {
    updateTheme();
  }, [theme]);

  useEffect(() => {
    fetch(`${base_api}${getRandomDrink}`)
      .then((response) => response.json())
      .then((data) => {
        setCurDrink(data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the extension data: ",
          error
        );
      });
  }, [date]);

  const increaseDate = () => {
    setDate(addOneDayToDate(date));
  };

  const decreaseDate = () => {
    setDate(reduceDateByOneDay(date));
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
              <div className="w-full h-[55px] md:h-[40px]"></div>
              <div className="w-full lg:w-[960px] xl:w-[1140px] m-auto">
                <div className="mx-3">
                  <Header
                    Title="The Bar"
                    Subtitle="Drink recommendations based on world wide sentiment."
                  />
                  <DrinkCarousel
                    curDate={date}
                    setSentimentVal={setSentimentVal}
                    drinkData={curDrink}
                    increaseDate={increaseDate}
                    decreaseDate={decreaseDate}
                  />
                  <div className="my-2">
                    <LoadingBar value={sentimentVal} />
                  </div>
                  <div className="my-2">
                    <DaySummary sentiment={sentimentVal} />
                  </div>
                  <div>
                    <Articles />
                  </div>
                </div>
              </div>
            </BrowserRouter>
          );
        }
      })()}
      <Footer />
    </div>
  );
}

export default App;
