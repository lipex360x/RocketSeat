import { createGlobalStyle } from 'styled-components';

import gitbkg from '../assets/gitbkg.svg';

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

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

body{
  background: #f0f0f5 url(${gitbkg}) no-repeat 70% top;
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
