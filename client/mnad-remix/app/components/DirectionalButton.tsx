import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface DirectionButtonProps {
  direction: string;
}

const DirectionalButton: React.FC<DirectionButtonProps> = ({ direction }) => {
  return (
    <>
      <motion.div
        className="h-[100px] w-[100px] rounded-full flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.25 }}
        initial={{ scale: 1 }}
      >
        <div className="text-5xl text-neutral-500">
          <div>
            {direction == "left" && <FaChevronLeft />}
            {direction == "right" && <FaChevronRight />}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DirectionalButton;