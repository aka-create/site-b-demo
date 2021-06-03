import "./App.css";
import {
  // Redirect,
  Route,
  Switch,
  // HashRouter,
  // BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./layout/index";

function App() {
  return (
    <div >
        <Switch>
          <Route exact path="/" component={Layout} />
        </Switch>
    </div>
  );
}

export default App;
