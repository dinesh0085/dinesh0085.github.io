import logo01 from "./image/logo01.png"
import resume from "./image/my-cv.pdf"
import profile from "./image/image0 (1).jpeg"
import './App.css';

function App() {



  
  return (
    <div className="App">
     <div id="header">
    <div class="container">
        <nav>
            <img src={logo01} class="logo" alt="logo"/>
            <ul>
                   <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="header-text" >
            <p>FULL STACK WEB DEVELOPER</p>
            <h1>Hi,  I'm <br/> <span>Dinesh</span>  Solanki</h1>
            <a href={resume} download class="btn btn2">Download CV</a>
        </div>
    </div>
</div>







<div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src={profile} alt="user"/>
                </div>
                <div class="about-col-2">
                    <h1 class="subtitle">
                        About Me
                    </h1>
                    <p>My name's Dinesh. I'm a full-stack web-developer based in Masai School, Benguluru.
                        <br/><br/>
                        I am a B.Tech graduate in Electronics & Communication  I love
                        exploring new technologies in the field of Web Development  and
                        always try to adapt to it.I believe in the concept of continuous
                        learning by regularly upgrading my skills and enhancing my knowledge.
                        I have learned MERN stack, data structures, algorithms, and soft skills
                        at Masai School.And besides coding, I love traveling, music and cricket.
                        Looking forward to work in a fast-paced environment and playing a key role
                        in a company's growth. Hope to work in a challenging environment as a specialized
                         MERN stack developer.
                        
                    </p>
                    </div>
                
            </div>
            
        </div>


        
    </div>
    </div>

  );
}

export default App;
