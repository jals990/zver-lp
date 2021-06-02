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

  img{
    width: 500px;
  }
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    width: 400px;
    margin-left: 50px;
    
    li {
      list-style: none;
      margin-bottom: 12px;

      strong {
        display: flex;
      }
    }
  }
  
`;
