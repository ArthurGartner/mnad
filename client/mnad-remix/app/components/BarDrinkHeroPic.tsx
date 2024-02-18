import DrinkGlass from "~/assets/copper_mug.svg";
import { motion } from "framer-motion";
import DrinkPicture from "./DrinkPicture";

export default function BarDrinkHeroPic() {
  return (
    <>
      <div className="flex h-full w-full">
        <motion.div
          className="flex-grow overflow-hidden h-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ x: 200, opacity: 0 }}
        >
          <DrinkPicture />
        </motion.div>
      </div>
    </>
  );
}
