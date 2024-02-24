export interface DrinkDetails {
  abv: number;
  dateModified: string;
  strDrink: string;
  drinkSummary: string;
  drinkFact: string;
  ingredients: Ingredients[];
}

export interface Ingredients {
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

export interface ArticleDetails {
  article_url: string;
  category: string;
  description: string;
  sentiment_score: number;
  thumbnail: string;
}

export interface ApiData {
  articles: ArticleDetails[];
  average_sentiment: number;
  drink_details: DrinkDetails;
  glass_details: GlassDetails;
}
