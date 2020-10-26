import styled from 'styled-components';
import { darken } from 'polished';

export const DevList = styled.ul`
  flex: 1;
  margin-left: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (max-width: 1000px) {
    margin-left: 0px;
    margin-top: 20px;
  }

  @media (max-width: 650px) {
    margin-top: 20px;
    grid-template-columns: 1fr;
  }
`;

export const DevItem = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 20px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      margin-right: 10px;
    }

    div strong {
      display: block;
      font-size: 16px;
      color: #333;
    }

    div span {
      font-size: 13px;
      color: #999;
      margin-top: 2px;
    }
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 15px 0;
  }

  .actions {
    height: 20px;
    display: flex;
    flex-direction: row-reverse;
    margin-top: auto;

    a {
      color: #8e4dff;
      font-size: 14px;
      display: flex;
      align-items: center;
      border-left: 1px solid #7d40e7;
      margin-left: 5px;
      padding-left: 5px;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.1, '#7d40e7')};
      }

      &:nth-child(3) {
        border-left: none;
      }

      svg {
        margin-right: 5px;
      }
    }

    button {
      font-size: 14px;
      display: flex;
      align-items: center;
      color: red;
      border-left: 1px solid red;
      margin-left: 5px;
      padding-left: 5px;

      transition: color 0.2s;

      &:hover {
        color: ${darken(0.2, 'red')};
      }
    }
  }
`;
