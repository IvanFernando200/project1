import "./App.css";
import { useState } from "react";

import getRandomArray from "./utils/getRandomArray";

import arrayForImages from "./utils/arrayForImages.json";
import quotes from "./utils/quotes.json";

import QuoteCard from "./components/QuoteCard";
import BtnCard from "./components/BtnCard";
function App() {
  const initialQuote = getRandomArray(quotes);
  const [randomQuote, setRandomQuote] = useState(initialQuote);

  const initialImage = getRandomArray(arrayForImages);
  const [imageSelected, setImageSelected] = useState(initialImage);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url("/item${imageSelected}.gif")`,
      }}
    >
      <h1 className="app__title">Quotes About Strength and Hope</h1>
      <div className="app__card">
      <QuoteCard randomQuote={randomQuote} />
      <BtnCard
        setRandomQuote={setRandomQuote}
        setImageSelected={setImageSelected}
      />
      </div>
    </div>
  );
}

export default App;
