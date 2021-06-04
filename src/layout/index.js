import React from "react";
import Header from "./header/index";
import Footer from "./footer/index";
import { HashRouter, BrowserRouter,Route } from 'react-router-dom';
import Routes from "../Routes/Routes";

const Layout = () => {
  return(
  <>
    <HashRouter>
        <Header />
        <main style={{minHeight:464,overfleowX:"hidden"}}>
          <Routes />
        </main>
        <Footer />
    </HashRouter>
  </>
  );
};
export default Layout;
