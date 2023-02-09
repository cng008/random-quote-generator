import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import QuoteBox from './QuoteBox';
import './App.css';

const initialState = {
  currentQuote: '',
  currentTheme: ''
};

const SET_QUOTE = 'SET_QUOTE';
const SET_THEME = 'SET_THEME';

const setQuote = quote => ({ type: SET_QUOTE, payload: quote });
const setTheme = theme => ({ type: SET_THEME, payload: theme });

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTE:
      return { ...state, currentQuote: action.payload };
    case SET_THEME:
      return { ...state, currentTheme: action.payload };
    default:
      return state;
  }
};

const store = createStore(quoteReducer);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <QuoteBox setQuote={setQuote} setTheme={setTheme} />
      </Provider>
    </div>
  );
};

export default App;
