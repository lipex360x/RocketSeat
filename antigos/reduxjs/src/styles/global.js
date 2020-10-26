import { createGlobalStyle } from 'styled-components';
import background from '~/assets/global.svg';

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
  background: #191920 url(${background}) no-repeat center top
}

html, body, #root {
	height: 100%
}
body, input, textarea, button {
  font: 14px 'Roboto', sans-serif;
}

button{
  cursor: pointer
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

#root{
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}



textarea{
  width:100%;
  min-height: 140px;
  resize: vertical;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px 24px;
  margin-top: 10px;
  line-height: 24px;
}
`;
