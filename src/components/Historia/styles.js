import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  @media (max-width: 768px) {
    margin-top: 80px !important;
    padding: 0 10px;

    div > div{
      width: 90vw !important;
      padding: 10px !important;
      border-radius: 17px !important;
    }

    .intro-img, .client-img{
      display: none;
    }

    > h4{
      font-size: 24px !important;
      text-align: center;
      padding: 20px;
    }

    > span{
      font-size: 18px !important;
      text-align: center;
      padding: 20px;
    }
  }

  h4{
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 0px;
    text-transform: none;
    color: #1b1b1b;
    margin-bottom: 24px;
  }

  > span {
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #d32525;
    margin-bottom: 40px;
  }

  .intro {
    display: flex;
    width: 100%;
    margin: 35px 0;

    .intro-img img{
      height: 450px;
    }

    .client-img img{
      height: 450px;
    }

    .intro-escope {
      display: flex;
      flex-direction: column;
      padding: 40px 70px;

      > span {
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #d32525;

        border-left: 4px solid #d32525;
        padding-left: 24px;
        margin-bottom: 24px;

      }

      h3{
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 0px;
        text-transform: none;
        color: #1b1b1b;
        margin-bottom: 24px;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        text-transform: none;
        color: #6d6a6a;
        margin-bottom: 24px;
      }

      ul {
        li {
          display: flex;
          align-items: center;

          span{
            color: #1b1b1b;
            font-size: 19px;
            font-weight: 500;
            text-transform: none;
            letter-spacing: 0px;
          }

          svg {
            width: 19px;
            height: 19px;
            padding: 4px;
            border-radius: 50%;
            border: 1px solid #d32525;
            margin-right: 14px;

            path { 
              color: #d32525 !important;
            }
          }
        }

      }
      
    }

  } 
`;
