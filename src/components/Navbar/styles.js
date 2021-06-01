import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background);
    color: var(--white);
    position: fixed;
    z-index: 9;

    img {
      width: 50px;
      height: 50px;
    }
`;
