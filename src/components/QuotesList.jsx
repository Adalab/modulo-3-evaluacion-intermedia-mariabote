import PropTypes from 'prop-types';

import QuoteItem from "./QuoteItem";

function QuotesList({ quotes }) {

  const htmlFriends = quotes.map((quote, idx)  => (
    <li key={idx} className="quote_card">
      <QuoteItem
        quote={quote.quote}
        character={quote.character}
      />
    </li>
  ));

  return (
    <ul className="quote_list">
      {htmlFriends}
    </ul>
  );
}

QuotesList.propTypes = {
  quotes: PropTypes.array
}

export default QuotesList;
