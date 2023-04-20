import React from "react";

const DrinkInfo = () => {
  return (
    <div className="w-100">
      <div className="max-w-sm rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-2xl m-auto">
        <div className="text-black dark:text-white font-bold text-xl text-center mt-2">
          Long Island Iced Tea
        </div>
        <div className="text-xs md:text-sm font-semibold text-neutral-500 text-center">
          22% ABV
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
          <ul className="ml-20 text-lg font-semibold text-black dark:text-white mb-6">
            <li className="my-2">
              1/2oz{" "}
              <span className="text-blue-600 dark:text-blue-500">SKYY</span>{" "}
              Vodka
            </li>
            <li className="my-2">
              1/2oz{" "}
              <span className="text-amber-600 dar:text-amber-500">Bacardi</span>{" "}
              Light Rum
            </li>
            <li className="my-2">1/2oz Gin</li>
            <li className="my-2">1/2oz Tequila</li>
            <li className="my-2">Juice from 1/2 lemon</li>
            <li className="my-2">1 splash of Coca-Cola</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrinkInfo;
