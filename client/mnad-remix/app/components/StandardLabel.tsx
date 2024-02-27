import { ReactElement } from "react";

interface StandardLabelProps {
  label: string | ReactElement;
}

const StandardLabel: React.FC<StandardLabelProps> = ({ label }) => {
  return (
    <div className="text-label text-label-sm h-[1.2rem] md:text-[1.2rem] md:h-[1.4rem] lg:text-[1.6rem] lg:h-[1.8rem]">
      {label}
    </div>
  );
};

export default StandardLabel;
