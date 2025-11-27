import quotes from "../utils/quotes.json";

const ShowQuote = () => {
  const randomQuote: number = Math.floor(Math.random() * quotes.length);
  return (
    <blockquote className="text-center font-primary text-gray-50 text-xs md:text-sm lg:text-lg">
      {quotes[randomQuote].quote}
    </blockquote>
  );
};

export default ShowQuote;
