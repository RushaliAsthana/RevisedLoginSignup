import React from "react";
import Logo from "../../assets/LoginSignupImages/logo.png";
import Carousel from "../LoginSignupComponents/Carousel";
import LoginPage from "../LoginSignupComponents/LoginPage";
import welcomeImg from "../../assets/LoginSignupImages/welcome.png";
function LoginPopup()
{
    return <div>
     <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
 Login
</button>
<div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-full-width  modal-fluid" role="document">
    <div className="modal-content modal-content-full-width signupContainer">  
      <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <nav className="navbar navbar-expand-sm  " id="newsletter">
        <a  href="#">
          <img id="logologin" src={Logo} height="50px" alt="Logo" />
        </a>
      </nav>
      <div className="container-fluid" id="cont1">
        <div className="row">
          <div className="col-sm-1"> </div>
          <div className="col-sm-4">
            <LoginPage />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-6 d-none d-lg-block d-md-block">
            <div className="container text-center mt-5 mb-5">
              <img className="img-fluid " id="welcome" src={welcomeImg}></img>
            </div>
            <Carousel> </Carousel>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
    </div>
}
export default LoginPopup;