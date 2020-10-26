import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  img {
    height: 64px;
  }

  h2 {
    margin-left: 20px;
    font-weight: 500;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #e02041;
    }
  }
`;
