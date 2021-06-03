import React from "react";
import Header from "./header/index";
import Footer from "./footer/index";
import {BrowserRouter} from "react-router-dom";
import Routes from "../Routes/Routes";

const Layout = () => {
  return(
  <>
    <BrowserRouter>
      <div>
        <Header />
        <main style={{minHeight:464}}>
          <Routes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </>
  );
};
export default Layout;
