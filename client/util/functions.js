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

export function isTomorrow(inputDate) {
  // Get current date and time
  const currentDate = new Date();

  // Remove the time part from the current date
  currentDate.setHours(0, 0, 0, 0);

  // Remove the time part from the input date
  inputDate.setHours(0, 0, 0, 0);

  // Calculate the difference between the input date and the current date
  const timeDifference = inputDate - currentDate;

  // Convert the time difference to days
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  // Check if the date is tomorrow
  return daysDifference === 1;
}

export function getNext5PMEastern() {
  // Get the current date and time in the local time zone
  const currentDateLocal = new Date();

  // Create an options object for formatting the date as Eastern Time
  const options = {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  // Get the current time in Eastern Time using Intl.DateTimeFormat
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const easternTimeParts = formatter.formatToParts(currentDateLocal);

  let easternHour = parseInt(
    easternTimeParts.find((part) => part.type === "hour").value,
    10
  );

  // Create a new date object for the next 5 PM Eastern
  const next5PMEastern = new Date(currentDateLocal);

  // Calculate the offset to get to the next 5 PM Eastern
  const hourOffset =
    easternHour >= 17 ? 24 - easternHour + 17 : 17 - easternHour;

  // Set the new date
  next5PMEastern.setHours(next5PMEastern.getHours() + hourOffset);
  next5PMEastern.setMinutes(0);
  next5PMEastern.setSeconds(0);
  next5PMEastern.setMilliseconds(0);

  return next5PMEastern;
}
