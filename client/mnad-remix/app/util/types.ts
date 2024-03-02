export interface DrinkDetails {
  abv: number;
  dateModified: string;
  strDrink: string;
  drinkSummary: string;
  drinkFact: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  volume_oz: number;
  volume_str: string;
  color_hex: string;
  type: string;
  form: string;
}

export interface GlassDetails {
  glass_url: string;
  liquid_url: string;
  name: string;
  size_oz: number;
}

export interface Article {
  article_url: string;
  category: string;
  description: string;
  sentiment_score: number;
  thumbnail: string;
  headline: string;
  publisher: string;
}

export interface ApiData {
  articles: Article[];
  average_sentiment: number;
  drink_details: DrinkDetails;
  glass_details: GlassDetails;
  forDate: string;
  prev_average_sentiment: number;
}
