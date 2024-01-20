import BarDrinkHeroPic from "./BarDrinkHeroPic";
import BarDrinkHeroText from "./BarDrinkHeroText";

export default function BarDrinkHero() {
  return (
    <>
      <div className="flex h-[50vh]">
        <div className="w-3/5 flex items-center justify-center">
          <div className="flex">
            <div>
              <BarDrinkHeroText />
            </div>
          </div>
        </div>
        <BarDrinkHeroPic />
      </div>
    </>
  );
}
