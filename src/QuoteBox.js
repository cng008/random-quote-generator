import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  const BASE_URL = 'https://api.api-ninjas.com/v1/quotes';
  const config = {
    headers: {
      'X-Api-Key': 'rJPZxFOf2wOAxx5JymAnHQ==V4qWSb3adyKMwiC9'
    }
  };
  const fetchQuote = async () => {
    const res = await axios.get(`${BASE_URL}?category=inspirational`, config);
    const quote = res.data[0].quote;
    if (quote.length > 300) fetchQuote();
    setCurrentQuote(res.data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box">
      <p id="text">{currentQuote.quote}</p>
      <p id="author">- {currentQuote.author}</p>
      <button id="new-quote" onClick={fetchQuote}>
        New quote
      </button>
      <a
        title="Tweet this quote!"
        href={
          'http://www.twitter.com/intent/tweet?hashtags=quotes&text=' +
          currentQuote.quote
        }
        target="_blank"
        id="tweet-quote"
      >
        Tweet this
      </a>
    </div>
  );
};

export default QuoteBox;
