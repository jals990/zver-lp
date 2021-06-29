import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 85vh;
  width: 100%;
  background: var(--text-body);

  @media (max-width: 476px) {
    height: 100%;
    margin-top: 80px !important;
    
    small {
      margin-top: -40px !important;
    }

    div ul {
      flex-direction: column  !important;
      li {
        margin: 20px !important;
      }
    }
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
