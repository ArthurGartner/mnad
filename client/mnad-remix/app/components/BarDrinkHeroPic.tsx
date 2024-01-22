import DrinkGlass from "~/assets/copper_mug.svg";
import { motion } from "framer-motion";

export default function BarDrinkHeroPic() {
  return (
    <>
      <div className="flex h-100 w-full">
        <div className="flex-grow">
          <motion.img
            src={DrinkGlass}
            alt="Drink Glass"
            className="h-full mx-auto"
            initial={{ x: -100, opacity: 0, scale: 1.5 }} // Start from left and fully transparent
            animate={{ x: 0, opacity: 1, scale: 1.5 }} // End at original position and fully opaque
            transition={{ duration: 0.5 }} // Transition duration
            exit={{ x: 200, opacity: 0, scale: 1.5 }} // Optional: define the exit animation
          />
        </div>
      </div>
    </>
  );
}
