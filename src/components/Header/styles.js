import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 85vh;
  
  div{
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 80px;
    justify-content: center;
    color: var(--white);
    position: absolute;

    img{
      width: 500px;
      height: 500px;
      margin-top: -150px;
      margin-left: -75px;

      @media (max-width: 476px) {
        width: 400px;
        height: 400px;
        margin-top: -150px;
      }
    }

    h3{
      margin-top: -150px
    }
  }

  > img {
    max-width: 100%;
    height: 90vh;
  }
`;
