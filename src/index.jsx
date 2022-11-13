import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "../src/styles/index.css";
import {lightTheme} from './themes/index'
import App from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
    <ThemeProvider theme={ lightTheme }>
      <CssBaseline />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
  
);