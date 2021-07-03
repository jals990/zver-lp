import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--dark);
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d1d1d1;

  @media (max-width: 786px){
    height: 100%;
    padding: 20px;

    img {
      margin-top: 20px;
    }
    strong{
      text-align: center;
      padding: 40px 0;
      margin-bottom: 0px !important;
    }
  }

  img{
    width: 150px;
  }

  div {
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  strong{
    position: relative;
    margin-bottom: 17px;
  }
`;
