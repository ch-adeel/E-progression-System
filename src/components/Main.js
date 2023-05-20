
import aiou from "../../src/Image/aiou.png";
import man from "../assets/man.jpg";
import multan from "../assets/Multan.jpg";
import images from "../assets/images.jpg";
import sir from "../assets/Sir.png";
import Qasim from "../assets/Qasim.png";
import Dr from "../assets/Dr.png";
import Shahbaz from"../assets/shahbaz.png";
import tahirsab from"../assets/tahirsab.png";
import arshad from"../assets/arshad.png";
import Babar from'../assets/Babar.png';
import Sana from'../assets/Sana.png';
import basit from'../assets/basit.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




function Main() {
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '750px'
  }
  const slideImages = [
    {
      url: man,
      caption: 'Slide 1'
    },
    {
      url: images,
      caption: 'Slide 2'
    },
    {
      url: multan,
      caption: 'Slide 3'
    },
  ];
  
    return (
    <>

  <header className=" ">
  <div className="lg:flex justify-between items-center m-3 ">
    <div className="flex justify-center items-center gap-3 ">
      <a href="/">
         <img className="w-10 h-10 lg:w-[120px] lg:h-[120px] " src={aiou}  />
      </a>
      <a href="">
      <h1 className=" text-lg lg:text-2xl uppercase mt-2">E progression system for fyp</h1>
      </a>
    </div>
    <nav>
      <ul className="flex gap-8 justify-center items-center text-lg lg:text-2xl lg:mr-20">
        <li>
          <a href="https://www.aiou.edu.pk/department-computer-science">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Signup</a>
        </li>
        <li>
          <a href="https://www.aiou.edu.pk/contact-us">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
<main className="">
<div className="slide-container  " >
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat" }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
</main>
<br />

<article className="mt-10">
  <h1 className="text-center text-6xl">Faculty Members</h1>
</article>
     <br />


      <section className="card-section mt-10">      
      <div className="card">
  <img src={sir} alt="Avatar" style={{"width":"100%"}} />
  <div className="container">
    <a href="https://www.aiou.edu.pk/dr-aftab-khan"><h4><b>Dr Aftab Khan</b></h4></a> 
    <p>Associate Professor</p> 
  </div>
</div>
<div className="card">
  <img src={Dr} alt="Avatar" style={{"width":"100%"}} />
  <div className="container">
    <a href="https://www.aiou.edu.pk/dr-moiz-uddin-ahmed-siddiqui"><h4><b>Dr Moiz Uddin Ahmed Siddiqui</b></h4></a> 
    <p>Associate Professor</p> 
  </div>
</div>
<div className="card">
  <img src={Shahbaz} alt="Avatar" style={{"width":"100%"}} />
  <div className="container">
    <a href="https://www.aiou.edu.pk/chaudhary-muhammad-shahbaz-anjum"><h4><b>Chaudhary Muhammad Shahbaz Anjum</b></h4></a> 
    <p>Associate Professor</p> 
  </div>
</div> 
 <div className="card">
 <img src={tahirsab} alt="Avatar" style={{"width":"100%"}} />
  <div className="container">
  <a href="https://www.aiou.edu.pk/mr-tahir-javed-0"><h4><b>Mr Tahir Javed</b></h4></a>
    <p>Lecturer</p> 
  </div>
</div>
<div className="card">
  <img src={Qasim} alt="Avatar" style={{"width":"100%" }} />
  <div className="container">
  <a href="https://www.aiou.edu.pk/mr-mohammad-qasim-khan"><h4><b>Mr Mohammad Qasim Khan</b></h4> </a>
    <p>Assistant Professor</p> 
  </div>
</div>
<div className="card">
  <img src={arshad} alt="Avatar" style={{"width":"100%" }} />
  <div className="container">
    <a href="https://www.aiou.edu.pk/dr-muhammad-arshad-awan"><h4><b>Dr Muhammad Arshad Awan</b></h4></a> 
    <p>Assistant Professor</p> 
  </div>
</div>
<div className="card">
  <img src={Babar} alt="Avatar" style={{"width":"100%" }} />
  <div className="container">
    <a href="https://www.aiou.edu.pk/dr-muhammad-babar"><h4><b>Dr Muhammad Babar</b></h4></a> 
    <p>Assistant Professor</p> 
  </div>
</div>
<div className="card">
  <img src={Sana} alt="Avatar"  style={{"width":"100%" }} />
  <div className="container">
    <a href="https://www.aiou.edu.pk/ms-sana-nasim"><h4><b>Ms Sana Nasim</b></h4></a> 
    <p>Assistant Professor</p> 
  </div>
</div>
<div className="card">
  <img src={basit} alt="Avatar"  style={{"width":"100%" }} />
  <div className="container">
    <a href="https://www.aiou.edu.pk/mr-basit-ismail"><h4><b>Mr Basit Ismail</b></h4></a> 
    <p>Assistant Professor</p> 
  </div>
</div>
</section>
<br />
      <br />
      <br /><br />
      <br />
      <br />
      {/* ------------------footer------------------------ */}
      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>Allama Iqbal Open University</h4>
        <ul>
          <li><a href="https://www.aiou.edu.pk/aiou-glance">about us</a></li>
          <li><a href="https://www.aiou.edu.pk/jobs">Jobs</a></li>
          <li><a href="https://www.aiou.edu.pk/tender-notices">Tender Notice</a></li>
          <li><a href="https://www.aiou.edu.pk/downloads-2">Downloads</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="https://www.aiou.edu.pk/downloads-2#">Downloads</a></li>
          <li><a href="https://www.aiou.edu.pk/research-journals">Research</a></li>
          <li><a href="https://www.aiou.edu.pk/contact-us">Contact Us</a></li>
          <li><a href="https://www.aiou.edu.pk/pressmediacliping">Events</a></li>
          
        </ul>
      </div>
      <div className="footer-col">
        <h4>Connect Us</h4>
        <ul>
          <li><a href="#">Fm Radio</a></li>
          <li><a href="#">Live TV</a></li>
          <li><a href="#">Video On Demand</a></li>
          <li><a href="http://library.aiou.edu.pk/">Aiou-Library</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="https://www.facebook.com/AIOU.OfficialAccount"><i className="fab fa-facebook-f" /></a>
          <a href="https://twitter.com/OfficialAIOU"><i className="fab fa-twitter" /></a>
          <a href="https://www.youtube.com/aiou-official"><i className="fab fa-youtube" /></a>
         
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}
export default Main;
