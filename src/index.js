import React from "react";
import App from "./App";
import GlobalStyle from "./theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
