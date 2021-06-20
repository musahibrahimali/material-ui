import React from "react";
import { SideMenu, Header } from "../Components/index";
import { CssBaseline } from "@material-ui/core";
import { AppStyles } from "./AppStyles";

function App() {
  const styles = AppStyles();
  return (
    <>
      <SideMenu />
      <div className={styles.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
