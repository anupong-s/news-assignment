import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import NewsPage from "../Containers/NewsPage/News";
import LoginPage from "../Containers/LoginPage/Login";
import LogoutPage from "../Containers/LogoutPage/Logout";

const App: React.FC<any> = (props) => {
  return (<>
    <BrowserRouter basename="">
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route isAuthenticated={true} path="/news" component={NewsPage} />
        <Route path="/logout" component={LogoutPage} />
      </Switch>
    </BrowserRouter>
    <hr />
  </>);
}


export default App;
