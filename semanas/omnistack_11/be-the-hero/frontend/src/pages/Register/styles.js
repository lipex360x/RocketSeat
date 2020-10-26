import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1120px;
  height: 100vh;

  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 4px;
  padding: 90px 120px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.09);

  div {
    width: 100%;
    max-width: 400px;

    img {
      margin-bottom: 60px;
    }

    h1 {
      margin-bottom: 20px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }

  form {
    width: 100%;
    max-width: 400px;

    input {
      margin-top: 8px;
    }

    div {
      display: flex;
      width: 100%;
      max-width: 450px;

      input + input {
        margin-left: 10px;
        width: 70px;
      }
    }
  }
`;
