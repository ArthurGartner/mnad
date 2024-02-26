import { motion } from "framer-motion";

interface BuildStatusLabelProps {
  label: string;
}

const BuildStatusLabel: React.FC<BuildStatusLabelProps> = ({ label }) => {
  return (
    <motion.div
      animate={{ backgroundColor: ["#ff1e00", "#ffbcb3"] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="font-semibold text-nowrap text-white rounded-full px-2"
    >
      {label}
    </motion.div>
  );
};

export default BuildStatusLabel;
