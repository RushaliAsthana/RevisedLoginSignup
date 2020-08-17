import React from "react";
import LoginPopup from "../../components/LoginSignupComponents/LoginPopup";
import SignupPopup from "../../components/LoginSignupComponents/SignupPopup";
import "./LoginSignup.css";
function LoginSignuppage()
{
   return <div>
        <LoginPopup></LoginPopup>
        <SignupPopup></SignupPopup>
   </div>
}
export default LoginSignuppage;