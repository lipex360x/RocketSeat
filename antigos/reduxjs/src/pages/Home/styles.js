import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-bottom: 50px;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;
    position: relative;
    background: #fff;
    margin-top: 30px;

    &:before {
      content: '';
      position: absolute;
      margin-top: -32px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      background: orange;
      top: 30px;
      z-index: -1;
      filter: blur(5px);
    }

    &:after {
      content: '';
      border-radius: 4px;
      position: absolute;
      margin-top: -33px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      background: orange;
      top: 30px;
      z-index: -2;
    }

    &:before,
    &:after {
      background: linear-gradient(235deg, #7159c1, rgba(0, 0, 0, 1), #00bcd4);
    }

    img {
      align-self: center;
      max-width: 210px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 18px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: background 0.2s;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
