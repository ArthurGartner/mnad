import { ReactElement } from "react";
import LikeDislike from "./LikeDislike";
import StandardLabel from "./StandardLabel";

type SectionHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string | ReactElement;
  interaction?: ReactElement;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  interaction,
}) => {
  return (
    <>
      <div className="font-semibold z-50">
        {label && <StandardLabel label={label} />}
        <div className="flex justify-between items-center">
          <div className="text-[1.4rem] sm:text-[1.6rem] lg:text-[2.5rem] my-auto">
            {title}
          </div>
          <div className="my-auto">{interaction && interaction}</div>
        </div>
        {subtitle && (
          <div className="text-label text-[.9rem] sm:text-[1rem] lg:text-[1rem] flex items-center text-center">
            {subtitle}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionHeader;
