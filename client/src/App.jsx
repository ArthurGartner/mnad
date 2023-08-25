import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SiteDown } from "./pages";
import {
  DaySummary,
  DrinkCarousel,
  Footer,
  Header,
  LoadingBar,
  Navbar,
} from "./components";

import { getCurrentDateString } from "../util/functions";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [darkTheme, setDarkTheme] = useState(false);
  const siteDown = false;
  const [date, setDate] = useState(null);
  const [sentimentVal, setSentimentVal] = useState(0);
  const [curDrink, setCurDrink] = useState(null);

  //This will be replaced by API call
  const drinkData = {
    _id: {
      $oid: "64e7e3651168da0691242a77",
    },
    idDrink: "15997",
    strDrink: "GG",
    strDrinkAlternate: null,
    strTags: null,
    strVideo: null,
    strCategory: "Ordinary Drink",
    strIBA: null,
    strAlcoholic: "Optional alcohol",
    strGlass: "Collins Glass",
    strInstructions:
      "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
    strInstructionsES: null,
    strInstructionsDE:
      "Den Galliano-Likör über Eis gießen. Füllen Sie den Rest des Glases mit Ginger Ale und das ist alles, was dazu gehört. Du hast jetzt ein eigenes GG.",
    strInstructionsFR: null,
    strInstructionsIT:
      "Versare il liquore Galliano su ghiaccio.\r\nRiempi il resto del bicchiere con ginger ale e questo è tutto.\r\nOra hai il tuo GG personale.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
    strImageSource: null,
    strImageAttribution: null,
    strCreativeCommonsConfirmed: "No",
    dateModified: "2016-07-18 22:06:00",
    strIngredient: ["Galliano", "Ginger ale", "Ice"],
    strMeasure: ["2 1/2 shots "],
    abv: {
      $numberDecimal: "15",
    },
    glass_url:
      "https://mightneedadrink.s3.amazonaws.com/drink-images/collins_glass.svg",
    liquid_url:
      "https://mightneedadrink.s3.amazonaws.com/drink-images/collins_glass_full.svg",
    liqColor: "green",
  };

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

    //Set curDrink
    setCurDrink(drinkData);

    //Set sentiment
    setSentimentVal(50);
  }, []);

  useEffect(() => {
    updateTheme();
  }, [theme]);

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
                  />
                  <div className="my-2">
                    <LoadingBar value={sentimentVal} />
                  </div>
                  <div className="my-2">
                    <DaySummary sentiment={sentimentVal} />
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
