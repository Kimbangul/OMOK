import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 html{
  font-size: 62.5%; 
  transition: font-size 0.3s;

  @media(max-width: 768px){
    font-size: 58%;
  }

  @media(max-width: 500px){
    font-size: 50%;
  }

  @media(max-width: 375px){
    font-size: 45%;
  }
 }
 *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    color: inherit;     
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  a, img{
    display: block;
  }
  button{
    outline: none;
    appearance: none;
    border: none;
  }
  body{
    /* font-family: 'Montserrat', 'Noto Sans KR', sans-serif; */
    font-size: 1.4rem;
  }
  h1, h2, h3, h4, h5, h6 {
    /* font-family: 'Montserrat', 'Noto Sans KR', sans-serif; */
  }
  button, input {
    /* font-family: 'Montserrat', 'Noto Sans KR', sans-serif; */
  }
`;


export default GlobalStyle;
