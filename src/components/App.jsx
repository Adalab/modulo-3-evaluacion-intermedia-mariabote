import { useState } from 'react';

import Header from './Header';
import Filters from './Filters';
import QuotesList from './QuotesList';

import '../scss/App.scss'

import friendsQuotes from '../data/friends.json';

function App() {
  const [quotes] = useState(friendsQuotes);

  const [filterQuote, setFilterQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('');

  const handleFilterQuote = (filterValue) => {
    setFilterQuote(filterValue);
  };
  const handleFilterCharacter = (filterValue) => {
    setFilterCharacter(filterValue);
  };

  const filteredQuotes = quotes.filter( quote => 
    quote.quote.toLowerCase().includes(filterQuote.toLowerCase())
  ).filter( quote => 
    quote.character.toLowerCase().includes(filterCharacter.toLowerCase())
  );

  return (
    <div className='app'>
      <Header></Header>
      <main>
        <Filters 
          handleFilterQuote={handleFilterQuote}
          handleFilterCharacter={handleFilterCharacter}></Filters>
        <QuotesList quotes={filteredQuotes}></QuotesList>
      </main>
    </div>
  )
}

export default App
