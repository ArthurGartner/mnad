import { RiRobot2Line } from "react-icons/ri";

export default function BarDrinkHeroSummary() {
  return (
    <>
      <div className="">
        The Moscow Mule is a popular cocktail that originated in the United
        States in the 1940s. It's known for its distinctive serving presentation
        in a copper mug and its simple yet refreshing composition. The drink is
        a mix of vodka, spicy ginger beer, and lime juice, garnished with a
        slice or wedge of lime. This combination creates a perfectly balanced
        blend of sweet, spicy, and citrus flavors, making it a favorite in bars
        and a classic choice for social gatherings. The copper mug in which it
        is traditionally served not only adds a unique aesthetic appeal but also
        enhances the drink's cold temperature, contributing to its crisp and
        invigorating taste.
      </div>
      <div className="flex items-center">
        <RiRobot2Line className="h-[25px] w-[25px] bg-secondary-light p-[5px] text-white rounded-2xl mr-[5px]" />
        <div className="text-sm italic">Generated by BarTender GPT</div>
      </div>
    </>
  );
}