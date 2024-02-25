import { motion } from "framer-motion";

interface BuildStatusLabelProps {
  label: string;
}

const BuildStatusLabel: React.FC<BuildStatusLabelProps> = ({ label }) => {
  return (
    <motion.div
      animate={{ color: ["#fc4542", "#f00602"] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="font-semibold text-nowrap"
    >
      {label}
    </motion.div>
  );
};

export default BuildStatusLabel;
