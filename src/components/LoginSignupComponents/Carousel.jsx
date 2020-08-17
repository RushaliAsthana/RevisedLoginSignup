import React from "react";
import carouselImg from '../../assets/LoginSignupImages/illustration.png';
import carouselImg2 from '../../assets/LoginSignupImages/illustration2.png';
import carouselImg3 from '../../assets/LoginSignupImages/illustration3.png';

function Carousel()
{
  return( 
  <div>
<div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
  
  <ul className="carousel-indicators">
    <li style={{borderRadius:'100%'}} data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
  </ul>
 
  <div className="carousel-inner" role="listbox">
    
    <div className="carousel-item active ">
    <p className="container">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 

</p>
      <img className="d-block w-50" src={carouselImg}
        alt="First slide"/>
    </div>
    
    <div className="carousel-item">
    <p className="container">Rushali Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    </p>      
    <img className="d-block w-50 img-fluid" src={carouselImg2}
        alt="Second slide"/>
    </div>
   
    <div className="carousel-item">
    <p className="container">Benedict Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    </p>
      <img className="d-block w-50" src={carouselImg3}
        alt="Third slide"/>
    </div>
   
  </div>
 
 
  
</div>
</div>);
    
}
export default Carousel;