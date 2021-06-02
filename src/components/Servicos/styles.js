import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 85vh;
  width: 100%;
  background: var(--text-body);

  h3{
    margin-top: -180px;
  }

  small {
    margin: -180px 0 60px;
  }
  
  div ul {
    display: flex;
    width: 100%;

    li {
      list-style: none;
      background: var(--background);
      margin: 0 30px;
      padding: 20px;
      width: 300px;
      height: 300px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h4, p {
        color: var(--white);
        z-index: 3;
      }
      img {
        position: absolute;
        width: 300px;
        height: 300px;
      }
    }
  }

`;
