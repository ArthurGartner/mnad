import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import BarArticlesReview from "~/components/BarArticlesReview";
import BarDateSelect from "~/components/BarDateSelect";
import BarDayAnalytics from "~/components/BarDayAnalytics";
import BarDrinkHero from "~/components/BarDrinkHero";
import BarDinkSentimentReview from "~/components/BarDrinkSentimentReview";
import Modal from "~/components/Modal";
import ModalDidYouKnow from "~/components/ModalDidYouKnow";
import ModalDrinkIngredients from "~/components/ModalDrinkIngredients";

export const meta: MetaFunction = () => {
  return [
    { title: "Might Need a Drink" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [sentimentValue, setSentimentValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openIngredientsModal = () => {
    setModalContent(<ModalDrinkIngredients />);
    setIsModalOpen(true);
  };
  const openDidYouKnowModal = () => {
    setModalContent(<ModalDidYouKnow />);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setSentimentValue(100);
  }, []);

  return (
    <>
      <div>
        {isModalOpen && <Modal onClose={closeModal} children={modalContent} />}
        <div className="relative">
          <BarDrinkHero
            openIngredients={openIngredientsModal}
            openDidYouKnow={openDidYouKnowModal}
          />
          <BarDinkSentimentReview sentimentValue={sentimentValue} />
          <BarDayAnalytics sentimentValue={sentimentValue} />
          <BarDateSelect />
          <BarArticlesReview />
        </div>
      </div>
    </>
  );
}
