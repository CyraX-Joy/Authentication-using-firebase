import { useContext, useEffect } from "react";
import { UserContext } from "./App";
import "./App.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "./firebase";
function Login() {
  let { user, setUser } = useContext(UserContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      // console.log(user);
    });
  }, []);
  // Configure FirebaseUI.
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <div>
      <h4 style={{ color: '#210373' }}> Authentication with firebase </h4>
      {user ? (
        <button
          style={{
            width: "100px",
            height: "50px",
            background: "white",
            margin: "50px",
            border: "1px solid black",
            borderRadius: "10%",
            color: "black",
            fontWeight: "bold",
            boxShadow: "10px 5px",
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
  );
}

export default Login;
