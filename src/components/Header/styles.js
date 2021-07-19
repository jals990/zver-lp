import styled from 'styled-components';
import globe from '../../media/_globe.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 85vh;
  
  > div{
    display: flex;
    z-index: 1;
    width: 100%;
    flex-direction: column;
    padding: 0 80px;
    justify-content: center;
    color: var(--white);
    position: absolute;

    > img{
      width: 350px;
      height: 200px;
      margin-top: -150px;
      margin-left: -45px;
    }

    h3{
      margin-top: -10px
    }
  }

  @media (max-width: 768px) {
    img {
      margin-top: 0px !important;
    }

    > div {
      padding: 30px;
    }

    h3{
      margin-top: 24px !important;
      font-size: 24px;
    }
  }

`;

export const Bkg = styled.div`
    background-image: url(${globe});
    max-width: 100%;
    height: 90vh;
    min-height: 500px; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0 !important;

    @media (max-width: 768px) {
      background-attachment: initial;
    }
`;