import { sentimentLabels } from "./dictionary";
import colors from "~/styles/colors";
import { Article } from "./types";

export const getSentimentLabel: (value: number) => string = (value) => {
  if (value < 0 || value > 100) return "Unknown";

  let closestKey: number = 0;
  const keys = Object.keys(sentimentLabels);

  for (const key of keys) {
    const numericKey = parseInt(key, 0);

    if (Math.abs(value - closestKey) > Math.abs(value - numericKey))
      closestKey = numericKey;
  }

  return sentimentLabels[closestKey];
};

const parseRGB = (colorString: string) => {
  const matchResult = colorString.match(/\d+/g);
  if (matchResult) {
    const [r, g, b] = matchResult.map(Number);
    return { r, g, b };
  } else {
    return { r: 0, g: 0, b: 0 };
  }
};

export const interpolateColor = (value: number): string => {
  const redColor = parseRGB(colors.gloomyRed.light);
  const yellowColor = parseRGB(colors.balancedYellow.light);
  const greenColor = parseRGB(colors.cheerfulGreen.light);

  let r, g;

  if (value <= 50) {
    // Transition from red to yellow
    r = redColor.r + (yellowColor.r - redColor.r) * (value / 50);
    g = redColor.g + (yellowColor.g - redColor.g) * (value / 50);
  } else {
    // Transition from yellow to green
    r = yellowColor.r + (greenColor.r - yellowColor.r) * ((value - 50) / 50);
    g = yellowColor.g + (greenColor.g - yellowColor.g) * ((value - 50) / 50);
  }

  return `rgb(${Math.round(r)}, ${Math.round(g)}, 0)`;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
};

export const getApiUrlForDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `https://nef6oxnawh.execute-api.us-east-1.amazonaws.com/day-drink?month=${month}&day=${day}&year=${year}`;
};

export const countUniquePublishers = (articles: Article[]): number => {
  const publishers = new Set();

  articles.forEach((article) => {
    if (article.publisher) {
      publishers.add(article.publisher);
    }
  });

  return publishers.size;
};

export const isValidImgUrl: (url: string) => boolean = (url) => {
  var isValid = false;

  isValid = url ? !url.endsWith(".ico") : false;

  return isValid;
};
