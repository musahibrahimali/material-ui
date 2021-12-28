import React from "react";
import { SideMenu, Header, Home } from "../Components/index";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { AppStyles, AppTheme } from "./AppStyles";

function App() {
  const styles = AppStyles();
  const theme = AppTheme;
  return (
    <>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={styles.appMain}>
          <Header />
          <Home />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
