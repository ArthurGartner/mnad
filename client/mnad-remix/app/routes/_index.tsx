import type { MetaFunction } from "@remix-run/node";
import BarDrinkHero from "~/components/BarDrinkHero";
import BarDinkSentimentReview from "~/components/BarDrinkSentimentReview";
import NavBar from "~/components/NavBar";

export const meta: MetaFunction = () => {
  return [
    { title: "Might Need a Drink" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <BarDrinkHero />
      <BarDinkSentimentReview />
    </>
  );
}
