import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyle = createGlobalStyle`
	body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: ${colors.light.lowContrast};
	}

	h1, h2, h3 {
		color: ${colors.light.green1}		
	}

	p, span {
		color: ${colors.light.green2}
	}
`;
