import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentTheme, setCurrentTheme] = useState('');

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
    setCurrentTheme(randomColor());
  };
  document.body.style.background = currentTheme;

  const randomColor = () => {
    const colors = ['#f94144', '#f3722c', '#f8961e', '#f9844a','#90be6d','#43aa8b','#4d908e','#577590','#277da1','#001427','#708d81','#f4d58d','#bf0603','#8d0801','#d88c9a','#f2d0a9','#f1e3d3','#99c1b9','#8e7dbe']; // prettier-ignore
    const randomIdx = Math.floor(Math.random() * colors.length);
    return colors[randomIdx];
  };
  console.debug(currentQuote, currentTheme);
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="QuoteBox">
      <div id="quote-box">
        <div className="container">
          <p id="text" style={{ color: currentTheme }}>
            <i
              className="fa-solid fa-quote-left"
              style={{ fontSize: '1.5em' }}
            ></i>{' '}
            {currentQuote.quote}
          </p>
          <p id="author" style={{ color: currentTheme }}>
            - {currentQuote.author}
          </p>
          <a
            title="Tweet this quote!"
            href={
              'http://www.twitter.com/intent/tweet?hashtags=quotes&text=' +
              currentQuote.quote
            }
            target="_blank"
            id="tweet-quote"
          >
            <i
              className="fa-brands fa-square-twitter"
              style={{ color: currentTheme }}
            ></i>
          </a>
          <button
            id="new-quote"
            onClick={fetchQuote}
            style={{ background: currentTheme }}
          >
            New quote
          </button>
        </div>
        <div id="credits">
          <a href="https://github.com/cng008" target="_blank">
            by christien
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
