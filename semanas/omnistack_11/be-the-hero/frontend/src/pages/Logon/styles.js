import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;
  height: 100vh;

  form {
    width: 100%;
    max-width: 350px;
    margin: 30px;

    img {
      margin-bottom: 100px;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }
  }
`;
