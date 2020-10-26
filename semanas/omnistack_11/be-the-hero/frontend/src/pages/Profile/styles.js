import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 60px;
    font-size: 20px;
  }

  ul {
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 36px;

    li {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      border-radius: 4px;
      padding: 40px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }

      p + strong {
        margin-top: 32px;
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }

      button {
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
