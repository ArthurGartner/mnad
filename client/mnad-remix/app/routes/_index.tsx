import { MetaFunction, json, LoaderFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import BarArticlesReview from "~/components/BarArticlesReview";
import BarDateSelect from "~/components/BarDateSelect";
import BarDayAnalytics from "~/components/BarDayAnalytics";
import BarDrinkHero from "~/components/BarDrinkHero";
import BarDinkSentimentReview from "~/components/BarDrinkSentimentReview";
import Modal from "~/components/Modal";
import ModalDidYouKnow from "~/components/ModalDidYouKnow";
import ModalDrinkIngredients from "~/components/ModalDrinkIngredients";
import { getApiUrlForDate } from "~/util/helperfunctions";
import { ApiData } from "~/util/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Might Need a Drink" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

async function fetchDataForDate(
  date: Date,
  attempts: number
): Promise<ApiData> {
  const apiUrl = getApiUrlForDate(date);
  const response = await fetch(apiUrl);

  if (!response.ok) {
    if (attempts <= 1) {
      throw new Error(
        `Failed to fetch data for ${date.toISOString()}: ${response.statusText}`
      );
    } else {
      const prevDay = new Date(date);
      prevDay.setDate(date.getDate() - 1);
      return fetchDataForDate(prevDay, attempts - 1);
    }
  }
  const data: ApiData = await response.json();
  const dataWithDate = {
    ...data,
    forDate: date.toISOString(), // Use ISO string for date to ensure compatibility
  };
  return dataWithDate;
}

export const loader: LoaderFunction = async ({ request }) => {
  const attempts = 5;
  const url = new URL(request.url);
  const day = url.searchParams.get("day");
  const month = url.searchParams.get("month");
  const year = url.searchParams.get("year");

  let date: Date;

  if (day && month && year) {
    // If day, month, and year query parameters are provided, use them to construct the date
    date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  } else {
    // If no date query parameters are provided, default to the current date
    date = new Date();
  }

  try {
    const data = await fetchDataForDate(date, attempts);
    return json(data);
  } catch (error) {
    return new Response((error as Error).message, {
      status: 500,
    });
  }
};

export default function Index() {
  const [sentimentValue, setSentimentValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);
  const [day, setDay] = useState<Date>(new Date());
  const [data, setData] = useState(useLoaderData<ApiData>());
  const fetcher = useFetcher<ApiData>();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openIngredientsModal = () => {
    setModalContent(
      <ModalDrinkIngredients drinkDetails={data.drink_details} />
    );
    setIsModalOpen(true);
  };
  const openDidYouKnowModal = () => {
    setModalContent(<ModalDidYouKnow drinkDetails={data.drink_details} />);
    setIsModalOpen(true);
  };

  const previousDay = () => {
    const prevDate = new Date(day);
    prevDate.setDate(day.getDate() - 1);
    setDay(prevDate);

    fetcher.load(
      `/?index&day=${prevDate.getDate()}&month=${
        prevDate.getMonth() + 1
      }&year=${prevDate.getFullYear()}`
    );
  };

  const nextDay = () => {
    const nextDate = new Date(day);
    nextDate.setDate(day.getDate() + 1);
    setDay(nextDate);

    fetcher.load(
      `/?index&day=${nextDate.getDate()}&month=${
        nextDate.getMonth() + 1
      }&year=${nextDate.getFullYear()}`
    );
  };

  useEffect(() => {
    if (fetcher.data) {
      setData(fetcher.data);
      console.log("FETCH DATA UPDATED");
    }
  }, [fetcher.data]);

  useEffect(() => {
    setDay(new Date(data.forDate));
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
          <BarDinkSentimentReview
            sentimentValue={data.average_sentiment}
            articleCount={data.articles.length}
          />
          <BarDayAnalytics sentimentValue={data.average_sentiment} />
          <BarDateSelect day={day} prevDay={previousDay} nextDay={nextDay} />
          <BarArticlesReview articles={data.articles} />
        </div>
      </div>
    </>
  );
}
