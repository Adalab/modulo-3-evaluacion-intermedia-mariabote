import PropTypes from "prop-types";

function QuoteItem( {quote, character} ) {

  return (
    <>
      <h3 className="quote__text">{quote}</h3>
      <h3 className="quote__character">{character}</h3>
    </>
  );
}

QuoteItem.propTypes = {
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
};

export default QuoteItem;