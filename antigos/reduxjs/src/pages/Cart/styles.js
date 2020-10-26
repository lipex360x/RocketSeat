import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  background: #fff;
  border-radius: 4px;
  padding: 30px;

  &:before {
    content: '';
    position: absolute;
    margin-top: -32px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: #fff;
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
    background: #fff;
    top: 30px;
    z-index: -2;
  }

  &:before,
  &:after {
    background: linear-gradient(235deg, #7159c1, rgba(0, 0, 0, 1), #00bcd4);
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    button {
      background: #7159c1;
      border: 1px solid #7159c1;
      color: #fff;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      &.btn-clean {
        margin-left: 10px;
        background: transparent;
        border: 1px solid red;
        color: red;

        &:hover {
          background: red;
          color: #fff;
        }
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    padding: 6px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
