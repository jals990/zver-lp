import styled from 'styled-components';
import ws from '../../media/ws.jpeg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 476px) {
    height: 100%;

    .divisor {
      margin-top: 80px !important;
    }

    ul {
      flex-direction: column  !important;
      padding: 20px !important;

      li {
        margin: 20px !important;
        width: 90% !important;
      }
    }
  }

  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;


    li {
      list-style: none;
      width: 33.33%;
      height: 340px;
      padding: 40px 70px;
      display: flex;
      flex-direction: column;
      background-image: url(${ws});
      background-size: cover;
      background-position: center;

      h3 {
        margin-bottom: 30px;
        border-bottom: 1px solid  #d32525;
        padding-bottom: 4px;
      }

      p{
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        text-transform: none;
        color: #e6e6e6;
      }
    }
  }
`;
