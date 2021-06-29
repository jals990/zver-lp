import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100%;
  margin: 65px 0 0;
  background: var(--background);


  @media (max-width: 425px){
    height: 100%;
    margin-top: 180px;

    h3{
      padding: 15px 50px !important;
      margin: 60px !important;
      text-align: center;
    }
    > div{
      flex-direction: column !important;
      margin: 20px 0 !important;

    }
  }

  > div{
    display: flex;
    flex-direction: row;

    .box-panel{
      margin: 0 20px !important;
    }
  }
  .rs-panel {
    display: inline-block;
    width: 340px;
  }

  .rs-panel-heading {
    color: var(--white) !important;
  }
`;
