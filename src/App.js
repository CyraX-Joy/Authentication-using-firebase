import "./App.css";
import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";

let UserContext = React.createContext();
function App() {
  let [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Login />
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };
