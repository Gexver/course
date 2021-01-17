import React from "react";
import ReactDOM from "react-dom";
import { Heading, Footer } from "./components";
import SocialButton from './socialbutton'
import "./styles.css";




const handleSocialLogin = (user) => {
  console.log(user)
}
 
const handleSocialLoginFailure = (err) => {
  console.error(err)
}
 
ReactDOM.render(
  <div>
    <SocialButton
      provider='facebook'
      appId='689668361682954'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Facebook
    </SocialButton>
  </div>,
  document.getElementById('app')
)




ReactDOM.render(
  <div>
    <SocialButton
      provider='google'
      appId='681878350764-rkaqtjlfu70vlood935cvi2gn9g0llop.apps.googleusercontent.com'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Google
    </SocialButton>
  </div>,
  document.getElementById('app2')
)