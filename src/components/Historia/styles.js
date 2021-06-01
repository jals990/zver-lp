import styled from 'styled-components';
import market from '../../media/market.jpg';

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
  
  div{
    width: 45%;
    padding: 40px 100px !important;
    margin-left: -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
 
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

    h4 {
      text-align: center;
      font-size: 3em;
      line-height: 1em;
      color: var(--background);
    }

    strong {
      text-align: center;
      margin-top: 50px;
      line-height: 1.75em;
      color: var(--background);
    }

  }

  .market{
    background: url(${market}) no-repeat center center;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    -webkit-font-smoothing: antialiased; 
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;

    width: 450px;
    height: 450px;
    z-index: 3;
  }

  div:nth-child(2){
    padding: 45px;
  }
`;
