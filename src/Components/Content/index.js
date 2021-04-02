import React from 'react';
import { Switch, Redirect } from "react-router-dom";
import routes from "../../helpers/routes";
import PrivateRoute from '../HOC/PrivateRoute';
import '../../loader.css';


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

const Content = () => {
    return (
       <React.Suspense fallback={loading}>
        <>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component && (
                            <PrivateRoute
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                component={route.component} />
                        )
                    })}
                    <Redirect from="/" to="/dashboard" />
                </Switch>
           
        </>
         </React.Suspense>
    )
}

export default Content;
