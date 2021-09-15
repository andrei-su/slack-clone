import React from "react";
// Data Layer
import { useStateProviderValue } from "../../StateProvider";
// Action Types
import { actionTypes } from "../../reducer";
// Firebase
import * as fb from "../../firebase";
// Components
import { Button } from "@material-ui/core";
// Image
import { SLACK_IMAGE } from "../../config";
// Styles
import "./Login.css";

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateProviderValue();

  const signIn = () => {
    fb.signInWithPopup(fb.auth, fb.provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={SLACK_IMAGE} alt="" />
        <h1>Sign in to "The slack workspace"</h1>
        <p>"workspace".slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
