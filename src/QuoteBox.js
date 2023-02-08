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
    const res = await axios.get(BASE_URL, config);
    console.log(res.data[0]);
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
      <a href="#" id="tweet-quote">
        Tweet this
      </a>
    </div>
  );
};

export default QuoteBox;
