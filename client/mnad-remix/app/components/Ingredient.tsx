import { ingredientIcons } from "~/util/dictionary";
import { Ingredient } from "~/util/types";

interface IngredientItemProps {
  ingredient: Ingredient;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient }) => {
  return (
    <div className="flex text-xl space-x-3 font-semibold items-center">
      <div>
        {ingredientIcons[ingredient.type]
          ? ingredientIcons[ingredient.type]
          : ingredientIcons["Unknown"]}
      </div>
      <div>
        {ingredient.volume_str} {ingredient.name}
      </div>
    </div>
  );
};

export default IngredientItem;
