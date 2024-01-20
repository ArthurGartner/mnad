import DrinkGlass from "~/assets/copper_mug.svg";

export default function BarDrinkHeroPic() {
  return (
    <>
      <div className="flex h-100 w-full">
        <div className="flex-grow">
          <img
            src={DrinkGlass}
            alt="Drink Glass"
            className="scale-150 h-full mx-auto"
          />
        </div>
      </div>
    </>
  );
}
