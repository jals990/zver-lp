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

  h3{
    padding: 15px 50px !important;
    margin: -160px 0 35px !important;
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
