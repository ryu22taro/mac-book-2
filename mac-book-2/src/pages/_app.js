import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="background-animation"></div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
