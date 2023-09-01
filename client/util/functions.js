import { sentimentLevel } from "../util/dictionary";

export function getDateString(dateObject) {
  if (!dateObject) return "";

  // Get individual components
  const day = dateObject.getDate(); // Day of the month
  const year = dateObject.getFullYear(); // Year

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
  const month = monthNames[dateObject.getMonth()];

  // Construct the formatted string
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

export function convertDateToNumerical(inputDate) {
  if (isNaN(inputDate.getTime())) {
    // Invalid date
    return "Invalid date";
  }

  // Padding single digit numbers with a leading zero
  const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-based month
  const day = String(inputDate.getDate()).padStart(2, "0");
  const year = inputDate.getFullYear();

  return `${month}/${day}/${year}`;
}

export function reduceDateByOneDay(date) {
  // Make sure the input is a Date object
  if (!(date instanceof Date)) {
    return "Input must be a Date object";
  }

  // Create a new Date object with the same values as the input date
  const newDate = new Date(date);

  // Subtract 1 day (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  newDate.setTime(newDate.getTime() - 24 * 60 * 60 * 1000);

  return newDate;
}

export function addOneDayToDate(date) {
  // Make sure the input is a Date object
  if (!(date instanceof Date)) {
    return "Input must be a Date object";
  }

  // Create a new Date object with the same values as the input date
  const newDate = new Date(date);

  // Subtract 1 day (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  newDate.setTime(newDate.getTime() + 24 * 60 * 60 * 1000);

  return newDate;
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
