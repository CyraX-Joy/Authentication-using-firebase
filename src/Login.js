import { useContext, useEffect } from "react";
import { UserContext } from "./App";
import "./App.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "./Utils/firebase";
function Login() {
  let { user, setUser } = useContext(UserContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);
  // Configure FirebaseUI.
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div
      style={{
        background: "#ccc",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4 style={{ color: "#210373", marginTop: "0px" }}>
        {" "}
        Authentication with firebase{" "}
      </h4>
      <div
        style={{
          padding: "100px",
          background: "black",
        }}
      >
        {user ? (
          <button
            style={{
              width: "100px",
              height: "50px",
              background: "white",
              margin: "50px",
              border: "1px solid ",
              borderRadius: "10%",
              color: "black",
              fontWeight: "bold",
              boxShadow: "10px 10px 3px #777",
            }}
            onClick={function () {
              firebase.auth().signOut();
            }}
          >
            Logout
          </button>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
