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
