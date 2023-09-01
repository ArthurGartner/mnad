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

import { base_api, getRandomDrink, getDayData } from "../util/constants";
import {
  reduceDateByOneDay,
  addOneDayToDate,
  convertDateToNumerical,
  getDateString,
} from "../util/functions";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [darkTheme, setDarkTheme] = useState(false);
  const siteDown = false;
  const [date, setDate] = useState(null);
  const [sentimentVal, setSentimentVal] = useState(0);
  const [dayData, setDayData] = useState(null);

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
    var curDate = Date.now();
    setDate(curDate);
  }, []);

  useEffect(() => {
    updateTheme();
  }, [theme]);

  useEffect(() => {
    if (!date) return;
    fetch(
      `${base_api}${getDayData}?date=${convertDateToNumerical(new Date(date))}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayData(data);
        console.log(data);
        setCurDrink(data?.drinkDetails[0]);
        //Set sentiment
        setSentimentVal(data.average_sentiment);
      });
  }, [date]);

  const increaseDate = () => {
    setDate(addOneDayToDate(new Date(date)));
  };

  const decreaseDate = () => {
    setDate(reduceDateByOneDay(new Date(date)));
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
                    curDate={getDateString(new Date(date))}
                    setSentimentVal={setSentimentVal}
                    drinkData={dayData?.drinkDetails}
                    increaseDate={increaseDate}
                    decreaseDate={decreaseDate}
                  />
                  <div className="my-2">
                    <LoadingBar value={dayData?.average_sentiment || 0} />
                  </div>
                  <div className="my-2">
                    <DaySummary sentiment={dayData?.average_sentiment || 0} />
                  </div>
                  <div>
                    <Articles dayData={dayData?.articles} />
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
