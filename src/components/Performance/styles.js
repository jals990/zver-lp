import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 75vh;
  width: 100%;
  margin-bottom: 45px;

  > h3{
    padding: 15px 50px !important;
    margin: -100px 0 65px;
  }

  .combo {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .indicadores {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h3 {
      white-space: pre;
      font-size: 28px;
      font-family: "Segoe UI Light", "Helvetica Neue Light", "Segoe UI", "Helvetica Neue", "Trebuchet MS", Verdana, sans-serif;
      font-weight: 200;
      fill: rgb(35, 35, 35);
      cursor: default;
    }

    strong, small, p, h3 {
      color: #333;
    }

    strong{
      font-size: 1.525em;
    }

    p {
      font-size: 1.225em;
    }

    ul {
      width: 90%;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: start;
        padding: 40px 0;

        border-bottom: 1px solid #333;

        &:last-child{
          border: none;
        }
      }
    }

    


  }
  #gauge, .indicadores {
    height: 600px;
    width: 600px;
  }
`;
