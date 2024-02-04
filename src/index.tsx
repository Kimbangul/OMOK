import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from "recoil";
import { ThemeProvider } from 'styled-components';
import MetaTag from './components/common/MetaTag';
import Theme from './style/Theme';
import GlobalStyle from './style/GlobalStyle';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <>
    <MetaTag />
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
   </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
