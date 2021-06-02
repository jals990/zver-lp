import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 75vh;
    width: 100%;
    background: var(--background);

    > h3{
      padding: 15px 50px !important;
      margin: -80px 0 35px !important;
    }

    ul{
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 60px 0 100px;

      li {
        list-style: none;
        width: 30%;
        height: 100%;
        margin: 5px;
        padding: 20px 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 20px;

        text-align: center;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
        }

        img{
          width: 110px ;
          height: 110px;
        }
      }
    }
`;