import styled from 'styled-components';
import atuacao from '../../media/atuacao.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px 0;

  img {
    height: 450px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 170px
  }


  @media (max-width: 476px) {
    height: 100%;
    margin-top: 80px !important;
  
    div ul {
      flex-direction: column  !important;
      li {
        margin: 20px !important;
      }
    }
  }
  
  h3{
    color: #1b1b1b;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 0px;
    text-transform: none;
    margin-bottom: 24px;
  }

  ul {
    li {
      display: flex;
      flex-direction: column;

      h4{
        font-size: 14px;
        font-weight: 800;
        font-style: normal;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #d32525;
      }

      p{
        color: #1b1b1b;
        font-size: 19px;
        font-weight: 600;
        text-transform: none;
        letter-spacing: 0px;
        margin-bottom: 40px;
      }
    }

  }
`;
