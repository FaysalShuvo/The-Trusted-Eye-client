import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";

const LogIn = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signedInUser = { name: displayName, email };
        console.log(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  };
  return (
    <>
      <div
        style={{ height: " 100vh" }}
        className=" container d-flex justify-content-center align-items-center "
      >
        <Button
          onClick={handleGoogleSignIn}
          className="btn-brand"
          variant="primary"
          size="lg"
          block
        >
          Google Sign In
        </Button>
      </div>
    </>
  );
};

export default LogIn;
