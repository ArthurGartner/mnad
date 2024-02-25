import { LoaderFunction, json } from "@remix-run/node";
import { getApiUrlForDate } from "~/util/helperfunctions";
import { ApiData } from "~/util/types";

async function fetchDataForDate(date: Date): Promise<ApiData> {
  const apiUrl = getApiUrlForDate(date);
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data for ${date.toISOString()}: ${response.statusText}`
    );
  }

  const data: ApiData = await response.json();
  const dataWithDate = {
    ...data,
    forDate: date.toISOString(), // Use ISO string for date to ensure compatibility
  };
  return dataWithDate;
}

export const loader: LoaderFunction = async ({ request }) => {
  console.log("LOADER EXECUTED");
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
    const data = await fetchDataForDate(date);
    return json(data);
  } catch (error) {
    return new Response((error as Error).message, {
      status: 500,
    });
  }
};

export default function About() {
  return <>ABOUT PAGE</>;
}
