import React from "react";
// Firebase
import * as fb from "../../firebase";
// Components
import { Button } from "@material-ui/core";
// Image
import { SLACK_IMAGE } from "../../config";
// Styles
import "./Login.css";

function Login() {
  const signIn = () => {
    fb.signInWithPopup(fb.auth, fb.provider)
      .then((result) => {
        console.log(result);
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
