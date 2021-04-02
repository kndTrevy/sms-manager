import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initialData, isUserLoggedIn, signOut } from "./actions";
import PrivateRoute from "./Components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { authConstants } from "./actions/constants";
import store from  './store';
import {Helmet} from "react-helmet";
import './loader.css';
import jwt from "jsonwebtoken";


const loading = (
  <div className="wrapper" >
    <div className="loader-container">
      <div className="yellow"></div>
      <div className="red"></div>
      <div className="blue"></div>
      <div className="violet"></div>
    </div>
  </div>
  );

const Layout = React.lazy(() => import('./Components/Layout'));
const Login = React.lazy(() => import('./Container/Login'));

const App = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(token){
        jwt.verify(token, "somethingsecretthatnobodyknows12439",(err,decoded)=>{
          if(err){
            localStorage.clear();

            store.dispatch({
                type: authConstants.LOGOUT_SUCCESS
            });
          }else{
            console.log(decoded)
          }
        })
      }
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  },[auth.authenticate]);



  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/login" name="Login" render={props => <Login {...props} />} />
          <PrivateRoute path="/" name="Home" component={Layout} />
        </Switch>
      </React.Suspense>
    </Router >
  );

}

export default App;