import { useContext } from "react";
import { UserContext } from "./App";
import "./App.css";

function Home() {
  let { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1> Hi, {user ? user.displayName : "Stranger"}</h1>
    </div>
  );
}

export default Home;
