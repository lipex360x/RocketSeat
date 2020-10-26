import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

const focused = css`
  border-color: #ff9000;
  color: #ff9000;
`;

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;

  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  transition: border-color 0.2s;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
    `}

  ${(props) => props.isFocused && focused}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: red;
    color: #fff;

    &::before {
      border-color: red transparent;
    }
  }
`;
