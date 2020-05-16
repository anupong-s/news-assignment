import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import AddNewPage from "../Containers/AddNewsPage/AddNews";
import NewsPage from "../Containers/NewsPage/News";
import LoginPage from "../Containers/LoginPage/Login";
import LogoutPage from "../Containers/LogoutPage/Logout";

const App: React.FC<any> = (props) => {
  return (<>
    <BrowserRouter basename="">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/add-news" component={AddNewPage} />
        <Route exact path="/edit-news/:id" component={AddNewPage} />
        <Route path="/logout" component={LogoutPage} />
      </Switch>
    </BrowserRouter>
  </>);
}


export default App;
