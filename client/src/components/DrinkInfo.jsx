import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ingredientIcons } from "../../util/dictionary";
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

  if (!drinkData) {
    return <></>;
  }

  return (
    <div className="w-100">
      <div className="relative max-w-sm rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-700 shadow-xl m-auto h-[400px] md:h-[600px] border border-neutral-200 dark:border-neutral-700">
        <div className="hidden md:block">
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
            {drinkData?.abv}% ABV | 86% <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>

        <div className="overflow-y-auto h-full pt-4">
          <h1 className="text-black dark:text-white font-bold text-base md:text-xl mb-2 px-6">
            Create your own
          </h1>
          <div className="px-6 pb-4">
            <p className="text-black dark:text-white text-sm md:text-base">
              {drinkData?.strInstructions}
            </p>
          </div>
          <div>
            <h1 className="text-black dark:text-white font-bold text-base md:text-xl mb-2 px-6">
              Ingredients
            </h1>
            <ul className="px-6 text-lg font-semibold text-black dark:text-white mb-6">
              {drinkData.ingredients.map((ingredient, index) => (
                <li className="my-2 flex h-[25px] md:h-[30px]">
                  <div className="my-auto mr-3 text-lg md:text-2xl  text-neutral-400">
                    {ingredientIcons[ingredient.type]}
                  </div>
                  <div className="text-sm md:text-lg my-auto">
                    {ingredient.volume_str} {ingredient.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkInfo;
