import React,{useState} from "react";
import FacebookWhite from '../../assets/LoginSignupImages/fbwhite.png';
import Googlewhite from '../../assets/LoginSignupImages/Googlewhite.png';
import Googleplay from '../../assets/LoginSignupImages/googleplay.png';
import Appstore from '../../assets/LoginSignupImages/appstore.png';
function Form()
{
   const [seen,pwdToggle]=useState(true);
   const [checkPwds,check]=useState(true);
   const [pswd,setPwd]=useState({
      uname:"",
      pwd:"",
      confirmpwd:"",
   });
   function notpCheck()
   {
      check(true)
   } 
  function passwordCheck()
  {
     
     if(pswd.pwd!==pswd.confirmpwd)
     check(false)
     else 
     {
     check(true)
     }

  }
  
   function handleChange(event)
   {
      const {name,value}=event.target;
      setPwd(prevValue=>{
         return {
            ...prevValue,
            [name]:value
         }
      });
      
     
   }

   function togPwd()
   {
      pwdToggle(seen=>!seen)
   } 
  
   function test()
   {
       pswd.uname="";
       pswd.pwd="";
       pswd.confirmpwd="";
       check(true);
   }
 
 
         return <div className="container-fluid text-center"  id="SIGNUP-PAGE">
         <div className="row justify-content-center " id="tophead">
           <h1 id="signupheader" className="white">Sign Up</h1>
           <br/><br/><br/>
          
           </div>
           <i data-toggle="tooltip" id="pwdicon" title="See Password" onClick={togPwd} className={seen?"fa fa-lock fa-lg white":"fa fa-unlock fa-lg white"} ></i>
           <form id="formcontainer">
           {!checkPwds? <span id="pwdnotsame" className="badge badge-danger">Passwords are not same!</span>:null}<br/>
            <div className="row">
            <div className="col-sm-10 offset-1" id="inp1white">
            <i id="unameicon" className="fa fa-envelope-o fa-lg white"></i>
             <input className="form-control" id="nameemail" value={pswd.uname} type="text" name="uname" onChange={handleChange} required placeholder="email or name"></input>
             </div>
            </div>
            <div className="row">
            <div className="col-sm-10 offset-1" id="inp2white" >
            
             <input className="form-control" value={pswd.pwd} name="pwd" onChange={ handleChange} type={seen?"password":"text"} required placeholder="password"></input>
             </div>
            </div>
            <div className="row">
            <div className="col-sm-10 offset-1" id="inp3white">
            <input id="confirmpwd" value={pswd.confirmpwd} name="confirmpwd" className="form-control " type="password" onFocus={notpCheck} onChange={handleChange} onBlur={passwordCheck} required placeholder="confirm password"></input>
             </div>
            </div>
         
           <div className="row">
           <div className="col-sm-6 offset-sm-3">
           
         
           <button  className="btn btn-block white border-white mt-4" disabled={!checkPwds} type="submit" >Submit</button> <br/>
        
        </div>
           </div> 
           </form>
           <div className="container" id="social">
           <span> <img id="fb-icon" height="50px" src={FacebookWhite}/></span> 
        <span className="white ml-3 mr-3" id="conn"><b>Connect With</b> </span>
        <span><img id="gog-icon" height="50px" src={Googlewhite}></img></span>
           </div><br/>
           <div className="container">
          <input id="loginbtn" onClick={test} className="btn btn-block border-white white" type="button"   data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter"  value="Already a member? Log In " />
          </div><br/>
     <div className="container-fluid row justify-content-center" id="apps">
     <img   id="playstore" className="img-responsive" src={Googleplay}/>
     <img   heigth="100px" id="appstore" className="img-responsive" src={Appstore}/>
     </div>
         </div>
}
export default Form;