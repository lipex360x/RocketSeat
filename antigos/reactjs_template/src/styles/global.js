import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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
}

html, body, #root {
	height: 100%
}
body, input, button {
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

button{
  cursor: pointer;
  background: 0;
  border: none;
}

`;
