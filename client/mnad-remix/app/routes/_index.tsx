import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import BarDayAnalytics from "~/components/BarDayAnalytics";
import BarDrinkHero from "~/components/BarDrinkHero";
import BarDinkSentimentReview from "~/components/BarDrinkSentimentReview";

export const meta: MetaFunction = () => {
  return [
    { title: "Might Need a Drink" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [sentimentValue, setSentimentValue] = useState(0);

  useEffect(() => {
    setSentimentValue(100);
  }, []);

  return (
    <>
      <BarDrinkHero />
      <BarDinkSentimentReview sentimentValue={sentimentValue} />
      <BarDayAnalytics sentimentValue={sentimentValue} />
    </>
  );
}
