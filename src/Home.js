import axios from "./Utils/axios";
import { useContext } from "react";
import { UserContext } from "./App";
import { useHistory } from "react-router-dom";
import "./Home.css"
import firebase from "firebase";

const Home = ()=>{
  let { user } = useContext(UserContext);
  let history = useHistory();
  return user ? (
    <div>
      <h4 style={{ color: "#210373" }}>Hi, {user ? user.displayName : "Stranger"}</h4>
      <h4 style={{ color: "#210373" }}>User ID : {user ? user.uid : "Didn't Received "}</h4>
      <div className="manage-btn">
        <button
          onClick={function () {
            axios
              .get("https://sleepy-woodland-04020.herokuapp.com/alive")
              .then(function (response) {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
          className = "btn btn:hover"
        >
          I am Alive
        </button>
        <button
          onClick={function () {
            firebase.auth().signOut().then(() => {
              // Sign-out successful.

            }).catch((error) => {
              // An error happened.
            });
          }}
          className = "btn btn:hover"
        >
          Logout
        </button>
      </div>
    </div>
  ) : (
    <>
      <h1> Please login 🔥 🙂 </h1>
      <button
        onClick={function () {
          history.push("/login");
        }}
        className = "btn btn:hover"
      > 
        Here 
      </button>
    </>
  );
}

export default Home;