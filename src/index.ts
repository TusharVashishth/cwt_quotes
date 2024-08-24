import quotes from "./quotes.js";

export const getQuote = () => {
  const randNum = Math.floor(Math.random() * quotes.length);
  const getQuote = quotes[randNum];
  return getQuote;
};
