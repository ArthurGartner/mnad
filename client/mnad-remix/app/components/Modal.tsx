import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  // Modal animations
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0, transition: { delay: 0.5 } },
    visible: { y: "0", opacity: 1, transition: { delay: 0.5 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-[100] flex justify-center items-center"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white p-6 rounded-3xl shadow-lg"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-0 right-0 m-4" onClick={onClose}>
            <motion.div whileHover={{ scale: 1.25 }} initial={{ scale: 1 }}>
              <IoClose className="text-3xl text-gloomyRed-light" />
            </motion.div>
          </button>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
