import React from "react";
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

const DrinkInfo = () => {
  return (
    <div className="w-100">
      <div className="relative max-w-sm rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-2xl m-auto">
        <div className="absolute text-xl mt-2 px-6 right-0">
          <FontAwesomeIcon
            icon={faHeart}
            className="mr-2 text-pink-500 dark:text-pink-500"
          />
          <FontAwesomeIcon
            icon={faThumbsDown}
            className="text-purple-500 dark:text-purple-400"
          />
        </div>
        <div className="text-black dark:text-white font-bold text-xl text-center mt-2">
          Long Island Iced Tea
        </div>
        <div className="text-xs md:text-sm font-semibold text-neutral-500 text-center">
          22% ABV | 86% <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="px-6 py-4">
          <p className="text-black dark:text-white text-base">
            The Long Island iced tea, or Long Island ice tea, is an IBA official
            cocktail, typically made with vodka, tequila, light rum, triple sec,
            gin, and a splash of cola. Despite its name, the cocktail does not
            typically contain iced tea, but is named for having the same amber
            hue as iced tea. <br></br>
            <br></br> The drink has a much higher alcohol concentration
            (approximately 22 percent) than most highball drinks due to the
            relatively small amount of mixer.
          </p>
        </div>
        <div>
          <h1 className="text-black dark:text-white font-bold text-xl mb-2 px-6">
            Create your own
          </h1>
          <ul className="px-6 text-lg font-semibold text-black dark:text-white mb-6">
            <li className="my-2 flex">
              <FontAwesomeIcon
                icon={faMartiniGlass}
                className="my-auto mx-3 text-neutral-500"
              />
              <div>
                1/2oz{" "}
                <span className="text-blue-600 dark:text-blue-500">SKYY</span>{" "}
                Vodka
              </div>
              <FontAwesomeIcon
                icon={faHandshake}
                className="my-auto mx-3  text-neutral-500"
              />
            </li>
            <li className="my-2 flex">
              <FontAwesomeIcon
                icon={faMartiniGlass}
                className="my-auto mx-3  text-neutral-500"
              />
              <div>
                1/2oz{" "}
                <span className="text-amber-600 dar:text-amber-500">
                  Bacardi
                </span>{" "}
                Light Rum
              </div>
              <FontAwesomeIcon
                icon={faHandshake}
                className="my-auto mx-3  text-neutral-500"
              />
            </li>
            <li className="my-2 flex">
              <FontAwesomeIcon
                icon={faMartiniGlass}
                className="my-auto mx-3  text-neutral-500"
              />
              <div>1/2oz Gin</div>
            </li>
            <li className="my-2 flex">
              <FontAwesomeIcon
                icon={faMartiniGlass}
                className="my-auto mx-3  text-neutral-500"
              />
              <div>1/2oz Tequila</div>
            </li>
            <li className="my-2 flex">
              <FontAwesomeIcon
                icon={faLemon}
                className="my-auto mx-3  text-neutral-500"
              />
              <div>Juice from 1/2 lemon</div>
            </li>
            <li className="my-2 flex">
              <GiSodaCan className="my-auto mx-3  text-neutral-500" />
              <div>1 splash of Coca-Cola</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrinkInfo;
