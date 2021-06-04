import "./App.css";
import {
  // Redirect,
  Route,
  Switch,
  HashRouter,
  // BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./layout/index";
import { HashRouters } from "./Routes/hashrouter";
import Content from "./content";
import Component from "./component";
import Accueil from "./pages/accueil";
import Contacts from "./pages/contacts";
import Liqueur from "./pages/liqueur";
import Vin from "./pages/vin";
import Header from "./layout/header";
import Footer from "./layout/footer";


function App() {
  return (
    <div >
        <Switch>
          <Route exact path="/" component={Layout} />
        </Switch>
    </div>
    // <HashRouter>
    //   <Header />
    //   <div>
    //     <Switch>
    //       <Route path="/salutation" component={Content} />
    //       <Route path="/accueil" component={Accueil} />
    //       <Route path="/contacts" component={Contacts} />
    //       <Route path="/liqueur" component={Liqueur} />
    //       <Route path="/vin" component={Vin} />
    //       <Route exact path="/" component={Accueil} />
    //     </Switch>
    //   </div>
    //   <Footer />
    // </HashRouter>
  );
}

export default App;
