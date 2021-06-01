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
    padding: 0 100px;
    justify-content: center;
    color: var(--white);
    position: absolute;

    img{
      width: 500px;
      height: 500px;
      margin-top: -150px;
      margin-left: -75px;
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
