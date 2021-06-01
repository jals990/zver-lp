import { createGlobalStyle } from 'styled-components';
import 'rsuite/dist/styles/rsuite-default.css'
import 'devextreme/dist/css/dx.light.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #040d21;
    --white: #f0f2f5;
    --bkg-body: #363f5f;
    --text-body: #969cb3;
    --dark: #090c15;
    --button: #ff9e43;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }

  html {
    font-family: Gotham,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    
    @media (max-width: 1088px){
      font-size: 93.75%;
    }
    @media (max-width: 788px){
      font-size: 87.5%;
    }
  }

  .divisor {
    margin-top: -25px;
    padding: 15px 50px 35px;
    background: var(--bkg-body);
    color: var(--white);
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
  
`;
