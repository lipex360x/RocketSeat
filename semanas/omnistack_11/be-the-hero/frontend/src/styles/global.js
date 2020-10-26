import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
	margin: 0;
	padding: 0;
	border: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
  outline:0;
}

body{
  -webkit-font-smoothing: antialiased;
  background: #f0f0f5
}

html, body, #root {
	height: 100%
}
body, input, textarea, button {
  font: 14px 'Roboto', sans-serif;
}

a{
  text-decoration: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

ol, ul {
	list-style: none;
}

input{
  width:100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}

textarea{
  width:100%;
  min-height: 140px;
  resize: vertical;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  margin-top: 10px;
  line-height: 24px;
}

.button{
  width: 100%;
  height: 60px;
  margin-top: 16px;
  display: inline-block;
  cursor: pointer;

  border: none;
  font-weight: 700;
  font-size: 18px;

  text-align:center;
  text-decoration: none;
  line-height: 60px;
  border-radius: 8px;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(90%)
  }

  &.red-button{
    background: #e02041;
    color: #fff;
  }

}

.link{
  display: flex;
  align-items: center;

  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  font-weight: 500;
  transition: opacity 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.9;
  }
}

`;
