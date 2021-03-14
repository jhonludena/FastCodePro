import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navigation from "./components/layout/Navbar/Navigation";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import DashboardSuperAdmin from "./components/dashboard/DashboardSuperAdmin";
import DashboardAdmin from "./components/dashboard/DashboardAdmin";
import DashboardSupervisor from "./components/dashboard/DashboardSupervisor";
import DashboardClient from "./components/dashboard/DashboardClient";
import UsersAdmin from "./components/dashboard/UsersAdmin";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navigation />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute
                exact
                path="/dashboard/super-administrator"
                component={DashboardSuperAdmin}
              />
              <PrivateRoute
                exact
                path="/dashboard/super-administrator/users-administration"
                component={UsersAdmin}
              />
              <PrivateRoute
                exact
                path="/dashboard/administrator"
                component={DashboardAdmin}
              />
              <PrivateRoute
                exact
                path="/dashboard/supervisor"
                component={DashboardSupervisor}
              />
              <PrivateRoute
                exact
                path="/dashboard/client"
                component={DashboardClient}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
