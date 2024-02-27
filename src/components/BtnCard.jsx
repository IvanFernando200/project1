import "./styles/BtnCard.css";

import getRandomArray from "../utils/getRandomArray";
import quotes from "../utils/quotes.json";
import arrayForImages from "../utils/arrayForImages.json";

const BtnCard = ({ setRandomQuote, setImageSelected }) => {
  const handleClick = () => {
    const quote = getRandomArray(quotes);
    setRandomQuote(quote);

    const newImage = getRandomArray(arrayForImages);
    setImageSelected(newImage);
  };

  return (
    <button className="btn__card" onClick={handleClick}>
      Another Quote
    </button>
  );
};

export default BtnCard;
