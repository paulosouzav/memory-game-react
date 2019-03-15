import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './config/global-style';
import * as serviceWorker from './serviceWorker';

const Root = () => (
  <>
    <Normalize />
    <GlobalStyle />
    <App />
  </>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
