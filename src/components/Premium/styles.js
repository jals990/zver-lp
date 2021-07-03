import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 65px 0;

  h3{
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 0px;
    text-transform: none;
    color: #1b1b1b;
    margin-bottom: 24px;
  }


  @media (max-width: 786px){
    height: 100%;
    margin-top: 20px;

    h3{
      padding: 0 !important;
      margin: 0 !important;
      text-align: center;
    }
    > div{
      flex-direction: column !important;
      margin: 20px 0 !important;

    }
  }

  > div{
    display: flex;
    flex-direction: row;

    .box-panel{
      margin: 20px !important;

      ul{
        margin-top: 30px;
        margin-left: 30px;
        li {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0px;
          text-transform: none;
          color: #6d6a6a;
          list-style: disc;
        }
      }

      .rs-panel-heading{
        width: 80%;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        text-transform: none;
        color: #1b1b1b !important;
        margin-bottom: 24px;
        margin-bottom: 30px;
        border-bottom: 1px solid  #d32525;
        padding-bottom: 4px;
      }

      small{
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        text-transform: none;
        color: #6d6a6a;
        margin-bottom: 24px;
      }
    }
  }
  .rs-panel {
    display: inline-block;
    width: 340px;
  }

  .rs-panel-heading {
    color: var(--white) !important;
  }
`;
