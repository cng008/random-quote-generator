import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { randomColor } from './helpers';

const QuoteBox = ({ setQuote, setTheme }) => {
  const currentQuote = useSelector(state => state.currentQuote);
  const currentTheme = useSelector(state => state.currentTheme);
  const dispatch = useDispatch();

  const BASE_URL = 'https://api.api-ninjas.com/v1/quotes';
  const config = {
    headers: {
      'X-Api-Key': 'rJPZxFOf2wOAxx5JymAnHQ==V4qWSb3adyKMwiC9'
    }
  };
  const fetchQuote = async () => {
    const res = await axios.get(`${BASE_URL}?category=inspirational`, config);
    const quote = res.data[0];
    if (quote.quote.length > 300) await fetchQuote();
    dispatch(setQuote(quote));
    dispatch(setTheme(randomColor()));
  };
  document.body.style.background = currentTheme;

  console.log(currentQuote, currentTheme);
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
          <div id="buttons">
            <a
              title="Tweet this quote!"
              href={
                'http://www.twitter.com/intent/tweet?hashtags=quotes&text=' +
                currentQuote.quote
              }
              target="_blank"
              rel="noopener noreferrer"
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
        </div>
        <div id="credits">
          <a
            href="https://github.com/cng008"
            target="_blank"
            rel="noopener noreferrer"
          >
            by christien
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
