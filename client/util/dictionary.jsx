import { BiSolidDrink, BiSolidBeer, BiSolidLemon } from "react-icons/bi";
import { TbBottleFilled } from "react-icons/tb";
import { LuMilk } from "react-icons/lu";
import {
  GiSodaCan,
  GiPowder,
  GiStarShuriken,
  GiManualJuicer,
} from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCocktail } from "@fortawesome/free-solid-svg-icons";

export const sentimentLevel = {
  0: "Gloomy",
  5: "Miserable",
  10: "Despondent",
  15: "Dismal",
  20: "Pessimistic",
  25: "Unhappy",
  30: "Downcast",
  35: "Low-Spirited",
  40: "Somber",
  45: "Discontent",
  50: "Balanced",
  55: "Content",
  60: "Optimistic",
  65: "Pleased",
  70: "Cheerful",
  75: "Joyful",
  80: "Happy",
  85: "Radiant",
  90: "Ecstatic",
  95: "Exuberant",
  100: "Euphoric",
};

export const industryColors = {
  Business: "bg-amber-400",
  Technology: "bg-indigo-400",
  Health: "bg-emerald-400",
  Science: "bg-rose-400",
};

export const ingredientIcons = {
  "Alcoholic Spirits": <FontAwesomeIcon icon={faCocktail} />,
  "Beers and Lagers": <BiSolidBeer />,
  "Bitters and Aperitifs": <TbBottleFilled />,
  "Dairy and Non-Dairy": <LuMilk />,
  "Flavorings and Syrups": <BiSolidDrink />,
  "Fresh Fruits and Garnishes": <BiSolidLemon />,
  "Fresh and Bottled Juices": <GiManualJuicer />,
  "Soft Drinks and Sodas": <GiSodaCan />,
  "Spices and Others": <GiPowder />,
  Unknown: <GiStarShuriken />,
};
