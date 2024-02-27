import "./styles/QuoteCard.css";
const QuoteCard = ({ randomQuote }) => {
  const { quote, author } = randomQuote;
  return (
    <div className="card">
      <blockquote className="card__quote">{quote}</blockquote>
      <cite className="card__cite">{author}</cite>
    </div>
  );
};

export default QuoteCard;
