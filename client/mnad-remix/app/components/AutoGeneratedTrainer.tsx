import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { RiRobot2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";

interface AutoGeneratedTrainerProps {
  label?: string;
  labelStyle?: React.CSSProperties;
  tailwindClasses?: string;
  tailwindContainerColorStyle?: React.CSSProperties;
}

const AutoGeneratedTrainer: React.FC<AutoGeneratedTrainerProps> = ({
  label,
  labelStyle,
  tailwindClasses,
  tailwindContainerColorStyle,
}) => {
  const [approve, setApprove] = useState<null | boolean>(null);

  //Need to cancel propogation of click event
  const handleClick =
    (state: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => {
      stopDefault(event);
      setApprove(state);
    };

  const stopDefault = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopPropagation();
  };

  return (
    <>
      <div className="flex" onClick={(event) => stopDefault(event)}>
        <div
          className={`${
            tailwindContainerColorStyle ? "" : "bg-neutral-200"
          } py-1 px-3 rounded-full inline`}
          style={tailwindContainerColorStyle}
        >
          <div className="flex space-x-2 items-center">
            <RiRobot2Line className="h-[20px] w-[20px] bg-secondary-light p-[3px] text-white rounded-2xl" />
            <div
              style={labelStyle}
              className={`${tailwindClasses} my-auto text-sm`}
            >
              {label}
            </div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={(event) => handleClick(true)(event)}
            >
              <IoMdThumbsUp
                className={`m-auto h-[20px] w-[20px] ${
                  approve ? "text-cheerfulGreen-light" : "text-label"
                }`}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={(event) => handleClick(false)(event)}
            >
              <IoMdThumbsDown
                className={`m-auto h-[20px] w-[20px] ${
                  approve == false ? "text-gloomyRed-light" : "text-label"
                }`}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoGeneratedTrainer;
