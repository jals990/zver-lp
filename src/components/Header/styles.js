import styled from 'styled-components';
import globe from '../../media/globe.jpg';

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
`;