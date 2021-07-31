import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter, Switch} from 'react-router-dom'
import Create from "./create";
import Update from "./update";

const routs = (
  < BrowserRouter >
     <div>
        <Switch>
           <Route exact path="/" component={Main} />
           <Route path="/create/" component={Create} />
           <Route path="/update/" component={Update} />
           
        </Switch>
     </div>
  </ BrowserRouter >
);
ReactDOM.render(routs, document.getElementById('root'));

 
// ReactDOM.render(
//   <Main/>, 
//   document.getElementById("root")
// );
