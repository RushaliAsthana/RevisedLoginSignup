import React,{useState} from "react";
import Facebook from '../../assets/LoginSignupImages/Facebook.png';
import Google from '../../assets/LoginSignupImages/Google.png';
import Googleplay from '../../assets/LoginSignupImages/googleplay.png';
import Appstore from '../../assets/LoginSignupImages/appstore.png';


function Form()
{

   const [seen,pwdToggle]=useState(true);
   const [pswd,setPwd]=useState({
      uname:"",
      pwd:"",
      confirmpwd:"",
   });
  
  
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
   }
 
  

         return <div className="container-fluid text-center"  id="LOGIN-PAGE">
         <div className="row justify-content-center" id="tophead">
           <h1 id="loginheader">Login</h1> 
           </div>
           <i data-toggle="tooltip" id="pwdicon" title="See Password" onClick={togPwd} className={seen?"fa fa-lock fa-lg":"fa fa-unlock fa-lg "} ></i>
           <form id="formcontainer">
            <div className="row">
            <div className="col-sm-10 offset-1" id="inp1">
            <i id="unameicon" className="fa fa-envelope-o fa-lg" ></i>
             <input className="form-control" id="nameemail" value={pswd.uname} type="text" name="uname" onChange={handleChange} required placeholder="email or name"></input>
             </div>
            </div>
            <div className="row">
            <div className="col-sm-10 offset-1" id="inplog" >
             <input className="form-control" value={pswd.pwd} name="pwd" onChange={ handleChange} type={seen?"password":"text"} required placeholder="password"></input>
             </div>
            </div>
            <div className="row">
            <div className="col-sm-10 offset-1" >
            <input id="loginsubmit" type="submit" className="btn btn-block mt-4 border-black " name="Submit"/>
             </div>
            </div>
           
           
           <div className="row">
           <div className="col-sm-6 offset-sm-3">
           <button  className="btn btn-block border-black mt-4"  type="button" >Forgot Password</button> <br/>
        
        </div>
           </div> 
           </form>
           <div className="container" id="social">
           <span><img id="fb-icon" height="50px" src={Facebook}/></span> 
        <span  id="conn" className="ml-3 mr-3"><b>Connect With</b> </span>
        <span><img id="gog-icon" height="50px" src={Google}/></span>
           </div><br/>
           <div className="container">
           <input id="signupbtn" className="btn btn-block border-black black" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter1" onClick={test} type="button" value="Not a Member? Sign Up" />
          </div><br/>
     <div className="container-fluid row justify-content-center" id="apps">
     <img   id="playstore" className="img-responsive" src={Googleplay}/>
     <img   heigth="100px" id="appstore" className="img-responsive" src={Appstore}/>
     </div>
         </div>
}
export default Form;