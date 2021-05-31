import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import { firebase } from "./Utils/firebase";
import axios from './Utils/axios'

let UserContext = React.createContext();
function App() {
  let [user, setUser] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        user
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            axios.defaults.headers["Authorization"] = `Bearer ${idToken}`;
            console.log(axios.defaults.headers["Authorization"]);
          })
          .catch(function (error) {
            console.log(error);
          });
      } 
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };
