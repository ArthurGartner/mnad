import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faWineBottle,
  faMartiniGlass,
  faLemon,
  faCircleInfo,
  faHeart,
  faThumbsDown,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { GiSodaCan } from "react-icons/gi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const DrinkInfo = (props) => {
  const [drinkData, setDrinkData] = useState(null);

  useEffect(() => {
    setDrinkData(props.drinkData);
  }, [props]);

  return (
    <div className="w-100">
      <div className="relative max-w-sm rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-700 shadow-xl m-auto h-[400px] md:h-[600px]">
        <div className="absolute flex text-xl mt-5 px-6 right-0">
          <AiOutlineHeart className="mr-2 text-pink-500 dark:text-pink-500" />
          <FontAwesomeIcon
            icon={faThumbsDown}
            className="text-purple-500 dark:text-purple-400"
          />
        </div>
        <div className="text-black dark:text-white font-bold text-xl text-center mt-2">
          {drinkData?.strDrink}
        </div>
        <div className="text-xs md:text-sm font-semibold text-neutral-400 text-center">
          {drinkData?.abv.$numberDecimal}% ABV | 86%{" "}
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="overflow-y-auto h-full">
          <h1 className="text-black dark:text-white font-bold text-xl mb-2 px-6">
            Create your own
          </h1>
          <div className="px-6 pb-4">
            <p className="text-black dark:text-white text-base">
              {drinkData?.strInstructions}
            </p>
          </div>
          <div>
            <h1 className="text-black dark:text-white font-bold text-xl mb-2 px-6">
              Ingredients
            </h1>
            <ul className="px-6 text-lg font-semibold text-black dark:text-white mb-6">
              <li className="my-2 flex">
                <FontAwesomeIcon
                  icon={faMartiniGlass}
                  className="my-auto mr-3 text-neutral-400"
                />
                <div>
                  1/2oz{" "}
                  <span className="text-blue-600 dark:text-blue-500">SKYY</span>{" "}
                  Vodka
                </div>
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="my-auto mx-3  text-neutral-400"
                />
              </li>
              <li className="my-2 flex">
                <FontAwesomeIcon
                  icon={faMartiniGlass}
                  className="my-auto mr-3  text-neutral-400"
                />
                <div>
                  1/2oz{" "}
                  <span className="text-amber-600 dar:text-amber-500">
                    Bacardi
                  </span>{" "}
                  Light Rum
                </div>
              </li>
              <li className="my-2 flex">
                <FontAwesomeIcon
                  icon={faMartiniGlass}
                  className="my-auto mr-3  text-neutral-400"
                />
                <div>1/2oz Gin</div>
              </li>
              <li className="my-2 flex">
                <FontAwesomeIcon
                  icon={faMartiniGlass}
                  className="my-auto mr-3  text-neutral-400"
                />
                <div>1/2oz Tequila</div>
              </li>
              <li className="my-2 flex">
                <FontAwesomeIcon
                  icon={faLemon}
                  className="my-auto mr-3  text-neutral-400"
                />
                <div>Juice from 1/2 lemon</div>
              </li>
              <li className="my-2 flex">
                <GiSodaCan className="my-auto mr-3  text-neutral-400" />
                <div>1 splash of Coca-Cola</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkInfo;
