import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60vh;
    background: var(--background);
    display: flex;
    justify-content: center;

    ul{
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 60px 0 100px;
      margin-bottom: 30px;

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
        }

        img{
          width: 110px ;
          height: 110px;
        }
      }
    }
`;
