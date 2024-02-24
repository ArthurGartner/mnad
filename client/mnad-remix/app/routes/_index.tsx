import { MetaFunction, json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import BarArticlesReview from "~/components/BarArticlesReview";
import BarDateSelect from "~/components/BarDateSelect";
import BarDayAnalytics from "~/components/BarDayAnalytics";
import BarDrinkHero from "~/components/BarDrinkHero";
import BarDinkSentimentReview from "~/components/BarDrinkSentimentReview";
import Modal from "~/components/Modal";
import ModalDidYouKnow from "~/components/ModalDidYouKnow";
import ModalDrinkIngredients from "~/components/ModalDrinkIngredients";
import { ApiData } from "~/util/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Might Need a Drink" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const apiUrl = `https://nef6oxnawh.execute-api.us-east-1.amazonaws.com/day-drink?month=${month}&day=${day}&year=${year}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Response("Failed to fetch day drink data.", {
      status: response.status,
    });
  }

  const data: ApiData = await response.json();

  return json(data);
};

export default function Index() {
  const [sentimentValue, setSentimentValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);
  const [day, setDay] = useState(new Date());
  const data = useLoaderData<ApiData>();

  console.log(data);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openIngredientsModal = () => {
    setModalContent(<ModalDrinkIngredients />);
    setIsModalOpen(true);
  };
  const openDidYouKnowModal = () => {
    setModalContent(<ModalDidYouKnow drinkDetails={data.drink_details} />);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setSentimentValue(data.average_sentiment);
  }, []);

  return (
    <>
      <div>
        {isModalOpen && <Modal onClose={closeModal} children={modalContent} />}
        <div className="relative">
          <BarDrinkHero
            drinkDetails={data.drink_details}
            drinkGlass={data.glass_details}
            openIngredients={openIngredientsModal}
            openDidYouKnow={openDidYouKnowModal}
          />
          <BarDinkSentimentReview sentimentValue={data.average_sentiment} />
          <BarDayAnalytics sentimentValue={data.average_sentiment} />
          <BarDateSelect day={day} />
          <BarArticlesReview />
        </div>
      </div>
    </>
  );
}
