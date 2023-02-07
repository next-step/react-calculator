import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}
button {
	font-size: 2rem;
	border: 0.5px solid #98999b;
}
.subgrid {
	display: grid;
}
`;

export default GlobalStyle;
