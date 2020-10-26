import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 320px;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 30px 20px;

  @media (max-width: 1000px) {
    width: 60%;
    margin: 0 auto;
  }

  @media (max-width: 650px) {
    width: 100%;
    margin: 0 auto;
  }

  > strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  > form {
    margin-top: 30px;

    .input-block {
      margin-top: 20px;

      &:nth-child(1) {
        margin-top: 0px;
      }
    }
    .input-group {
      margin-top: 20px;
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
      .input-block {
        margin-top: 0px;
      }
    }

    span {
      color: red;
    }

    label {
      color: #acacac;
      font-size: 14px;
      font-weight: bold;
      display: block;
    }

    input {
      width: 100%;
      height: 32px;
      font-size: 14px;
      color: #666;
      border-bottom: 1px solid #eee;
    }

    button {
      width: 100%;
      margin-top: 20px;
      background: #7d40e7;
      border-radius: 2px;
      padding: 15px 20px;
      font-size: 16px;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#7d40e7')};
        color: #fff;
      }
    }
  }
`;
