import { sentimentLevel } from "../util/dictionary";

export function getCurrentDateString() {
  const date = new Date(); // Get current date and time

  // Get individual components
  const day = date.getDate(); // Day of the month
  const year = date.getFullYear(); // Year

  // Get the month (0-11) and convert it to the full month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];

  // Construct the formatted string
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

export function reduceDateByOneDay(dateString) {
  // Convert the dateString to a Date object
  const date = new Date(dateString);

  // Make sure the date is valid
  if (isNaN(date)) {
    return "Invalid date";
  }

  // Reduce the date by one day
  date.setDate(date.getDate() - 1);

  // Format the new date as a string in the format "Month Day, Year"
  const options = { month: "long", day: "numeric", year: "numeric" };
  const newDateString = date.toLocaleDateString("en-US", options);

  return newDateString;
}

export function addOneDayToDate(dateString) {
  // Convert the dateString to a Date object
  const date = new Date(dateString);

  // Make sure the date is valid
  if (isNaN(date)) {
    return "Invalid date";
  }

  // Add one day to the date
  date.setDate(date.getDate() + 1);

  // Format the new date as a string in the format "Month Day, Year"
  const options = { month: "long", day: "numeric", year: "numeric" };
  const newDateString = date.toLocaleDateString("en-US", options);

  return newDateString;
}

export function getSentimentPhrase(value) {
  // Ensure value is within 0-100 range
  if (value < 0 || value > 100) {
    return "Invalid value";
  }

  // Find the closest key in the dictionary
  let closestKey = 0;
  for (let key in sentimentLevel) {
    if (Math.abs(value - closestKey) > Math.abs(value - key)) {
      closestKey = key;
    }
  }

  return sentimentLevel[closestKey];
}
