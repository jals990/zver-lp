import styled from 'styled-components';

import market from '../../media/multimercado.jpg';
import consulting from '../../media/japa.jpg';

export const Container = styled.div`
  width: 100%;
  height: 95vh;

  display: flex;

  @media (max-width: 476px) {
    margin-top: 80px !important;

    div > div{
      width: 90vw !important;
      padding: 10px !important;
      border-radius: 17px !important;
    }
  }

  .intro {
    display: flex;
    width: 100%;
    margin: 20px;

    .intro-img{
      background: url(${consulting});
      width: 750px;
      height: 450px;
      background-size: cover;
      background-position: center;
    }

    .icon {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin: 100px 0px 0px;
      padding: 40px 0px 0px 60px;
      height: 497px;

      h3{
        font-size: 45px;
        font-weight: 500;
        letter-spacing: 0px;
        text-transform: none;
        color: #1b1b1b;
      }

      > div {
        display: flex;
        align-items: center;

        svg {
          color: #e7202d !important;
          width: 24px;
          height: 24px;
          margin: 0 10px;
        }

        p{
          color: #1b1b1b;
          font-size: 19px;
          font-weight: 500;
          text-transform: none;
          letter-spacing: 0px;
        }
      }
    }

    .oportunidade {
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #d32525;
    }
  } 
`;
