import Coconut from "~/assets/coconut_dynamic.svg";
import SVGSmileModifier from "./SVGModifier";

interface DynamicCoconutProps {
  sentimentValue: number;
}

const DynamicCoconut: React.FC<DynamicCoconutProps> = ({ sentimentValue }) => {
  return (
    <>
      <div className="relative">
        <img src={Coconut} className="absolute" alt="Coconut Visual" />
        <div className="relative">
          <SVGSmileModifier value={sentimentValue || 0} />
        </div>
      </div>
    </>
  );
};

export default DynamicCoconut;
