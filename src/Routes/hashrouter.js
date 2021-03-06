import React from "react";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";
import Content from "../content";
import Component from "../component";
import Accueil from "../pages/accueil";
import Contacts from "../pages/contacts";
import Liqueur from "../pages/liqueur";
import Vin from "../pages/vin";

const HashRouters = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/salutation" component={Content} />
          <Route path="/accueil" component={Accueil} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/liqueur" component={Liqueur} />
          <Route path="/vin" component={Vin} />
          <Route exact path="/" component={Accueil} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default HashRouters;
