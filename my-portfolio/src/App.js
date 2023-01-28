import logo02 from "./image/logo02.png"
import resume from "./image/dinesh-solanki-resume.pdf"
import profile from "./image/Dinesh_solanki1.jpg"
import work01 from "./image/DotAndKey.png"
import work02 from "./image/Shemrush3.png"
import work03 from "./image/Unsplash.png"
import work04 from "./image/Monday.png"
import githubCelender from "./image/Shemrush1.png"
import githubState from "./image/GitHubState.png"
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip';
import HTML from "./image/HTML.jpg"
import CSS from "./image/CSS.png"
import JAVASCRIPT from "./image/JAVASCRIPT.jpg"
import REACT from "./image/REACT.png"
import REDUX from "./image/REDUX.png"
import EXPRESS from "./image/EXPRESS.jpg"
import MONGODB from "./image/MONGODB.jpg"
import TYPESCRIPT from "./image/TYPESCRIPT.jpg"
import REACT_REDUX from "./image/REACT_REDUX.jpg"
import NODEJS from "./image/NODEJS.png"
import CHAKRAUI from "./image/CHAKRAUI.png"

import GITHUB from "./image/GITHUB.jpg"
import POSTMAN from "./image/POSTMAN.jpg"
import CODESANDBOX from "./image/CODESANDBOX.jpg"
import VSCODE from "./image/VSCODE.jpg"
import GIT from "./image/GIT.jpg"
import CODEPEN from "./image/CODEPEN2.png"
import LINKEDIN from "./image/LINKEDIN.png"
import './App.css';
import Stats from "./component/Stats"

function App() {
  
   const selectLastHalfYear = contributions => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 6;
    
      return contributions.filter(day => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();
    
        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    };

  
  return (
    <div className="App">

       <nav>
            <img src={logo02} class="logo" alt="logo"/>
            <ul  id="sidemenu">
                   <li><a href="#header">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li> <a href="https://drive.google.com/file/d/1lyI2nwucXbk7WrtL5_urdS_-l7rgjhUR/view?usp=share_link" target="_blank" >Resume</a></li>
            </ul>
        </nav>

<div id="main-container">

<div id="header">
    <div class="container">
       
     <div class="homepage-container">
        <div class="header-text" >
            <p>FULL STACK WEB DEVELOPER</p>
            <h1>Hi,  I'm <br/> <span>Dinesh</span>  Solanki</h1>
            <a href={resume} download="Dinesh-Solanki-Resume" class="btn btn2">Download CV</a>
        </div>

        <div class="profile-pic" style={{paddingLeft:"2px"}}>
            <img src={profile} style={{marginLeft:"2px",borderRadius:"1rem",width:"60%",border:"1px solid white",marginTop:"20px"}} alt="user"/>
        </div>
        </div>


    </div>
</div>







<div id="about">
        <div class="container">
           
           
           
                    <h1 class="subtitle" style={{marginTop:"20px"}}>
                        About Me
                    </h1>
                    <p id="details_paragraph">My name's Dinesh. I'm a full-stack web-developer based in Masai School, Benguluru.
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



{/* --------------------project----------------------- */}


<div id="portfolio">
    <div class="container">
        <h1 class="subtitle">
            My Projects
        </h1>
        <div class="worklist">
            <div class="work">
                <img src={work04}/>
                <div class="layer">
                <h3>Monday.com Clone</h3>  
                </div>

                <div class="project-description">
                <h3>Monday.com Clone</h3>
                    <p>Built the this app using React.js and for css i have used Chakra UI
                       <br/> <br/> Features: <br/>Fixed Navbar | Sign-in | Sign-up | Homepage | Authentication | Fixed Sidebar | Authorized user Homepage | Filter
                       <br/> <br/><b>Tech Stack: <br/>  React.js | ES6 | JSON server| Chakra UI | Component | Authentication</b>

                    </p>

                    <div>
                 <button class=""><a target={"_blank"}  href="https://netlify-thinks-jdsolankijd123-gmail-com-is-great-2696b.netlify.app/">Deployed Link</a></button>  
                 <button class=""> <a target={"_blank"} href="https://github.com/dinesh0085/scrawny-liquid-7267/tree/main/scrawny-liquid-7267">Github Link</a></button>  
                 </div>
                    </div>
                </div>
           


            <div class="work">
                <img src={work03}/>
                <div class="layer">
                <h3>Unsplash.com Clone</h3>
                </div>
                <div class="project-description">
            <h3>Unsplash.com Clone</h3>
                    <p>Built this app using React.js and Chakra UI.
                        <br/> <br/> Features: <br/>Search Functionality | Fetch Data From API |Fixed Navbar | Sign-in | Sign-up | Homepage | Authentication   
                        <br/> <br/> <b> Tech Stack: <br/>React.js | ES6 | JSON server| Chakra UI | Component | Authentication</b>

                    </p>


                
                       <div>
                     <button class=""><a target={"_blank"} href="https://lyrical-toothbrush-5471.netlify.app/">Deployed Link</a></button>  
                     <button class=""> <a target={"_blank"} href="https://github.com/dinesh0085/-lyrical-toothbrush-5471">Github Link</a></button>  
                     </div>
            </div>
            </div>



        
            <div class="work">
                <img src={work02}/>
                <div class="layer">
                <h3>Semrush Clone</h3>
                </div>

                <div class="project-description" >
            <h3>Semrush Clone</h3>
                    <p>We created this project in a team of 5 members in Construct Week in Masai School, I was the leader in this project.
                        <br/><br/> Features: <br/>Fixed Navbar | Sign-in | Sign-up | Homepage | Authentication | Fixed Sidebar | Authorized user Homepage | Filter | Features page | Pricing page | Resource page | Dropdown menu 
                        <br/> <br/> <b> Tech Stack: <br/>HTML5 | CSS-3 | JavaScript | Crouser |  Authentication | Local Storage |ES6 </b></p>
                        
                        <div>
                   <button> <a target={"_blank"} href="https://fastidious-hotteok-25128b.netlify.app/index.html">Deployed Link</a></button>
                   <button> <a target={"_blank"} href="https://github.com/dinesh0085/concerned-teeth-2742">GitHub Link</a></button>
                   </div>
            </div>

            </div>

            

            <div class="work">
                <img src={work01}/>
                <div class="layer">
                <h3>Dot&Key Clone</h3> 
                </div>


                <div class="project-description">
            <h3>Dot&Key Clone</h3>
                    <p>We created this project in a team of 6 members in Construct Week in Masai School, we have used HTML5, CSS-3 and JavaScript.
                        
                           <br/>  <br/>Features: <br/> Fixed Navbar/Bottom | Sign-in | Sign-up | Homepage | Authentication | Product Pages | Cart Page | Checkout | Profile 
                           <br/> <br/><b> Tech Stack: <br/>HTML5 | CSS-3 | JavaScript | Crouser |  Authentication | Local Storage </b>
                         </p>
                   <div>
                   <button> <a target={"_blank"} href="https://stirring-lollipop-9b03d4.netlify.app/">Deployed Link</a></button>
                   <button> <a target={"_blank"} href="https://github.com/mukundjha1310/DotandKey.com">GitHub Link</a></button>
                   </div>
            </div>

            </div>
           
        </div>
      
    </div>
   </div>



   <div id="github">
            <h1>GitHub Stats</h1>
            <br></br>
            <br></br>
            <Stats ></Stats>
            <br></br>
            <br></br>
            <br></br>
            <h1>GitHub Calender</h1>
            <br></br>
            <br></br>
            <GitHubCalendar style={{width:"80%" ,margin:"auto"}} username="dinesh0085" blockSize={20}  year={new Date().getFullYear()}  ></GitHubCalendar>
               <ReactTooltip delayShow={20}></ReactTooltip>
               </div>


       <div id="skills">

        <div className="inner">
           <div className="header">
             <h1>My Skills</h1>
           </div>

           <div className="container1">
              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={HTML}></img>
                    </div>
                    <h3>HTML 5</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={CSS}></img>
                    </div>
                    <h3>CSS 3</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={JAVASCRIPT}></img>
                    </div>
                    <h3>JavaScript</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={REACT}></img>
                    </div>
                    <h3>React</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={REDUX}></img>
                    </div>
                    <h3>Redux</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={REACT_REDUX}></img>
                    </div>
                    <h3>React-Redux</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={NODEJS}></img>
                    </div>
                    <h3>Node Js</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={EXPRESS}></img>
                    </div>
                    <h3>Express.js</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={MONGODB}></img>
                    </div>
                    <h3>MongoDB</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={CHAKRAUI}></img>
                    </div>
                    <h3>CHAKRAUI</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={TYPESCRIPT}></img>
                    </div>
                    <h3>TYPESCRIPT</h3>
                 </div>
              </div>

           </div>
        </div>







        <div className="inner">
           <div className="header">
             <h1>Tools</h1>
           </div>

           <div className="container1">
              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={VSCODE}></img>
                    </div>
                    <h3>Vs Code</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={CODESANDBOX}></img>
                    </div>
                    <h3>Codesandbox</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={CODEPEN}></img>
                    </div>
                    <h3>Codepen</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={GITHUB}></img>
                    </div>
                    <h3>GitHub</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={GIT}></img>
                    </div>
                    <h3>Git</h3>
                 </div>
              </div>

              <div className="skill-box">
                 <div className="skill-title">
                    <div className="img">
                        <img src={POSTMAN}></img>
                    </div>
                    <h3>Postman</h3>
                 </div>
              </div>

           </div>
        </div>

        </div>



    <div id="contact">
   
       
            <h1 class="subtitle"  style={{marginBottom:"50px"}}>Contact Me</h1>
            <p>Email: jdsolankijd123@gmail.com</p>
            <p style={{marginTop:"20px"}}>Mobile: +91 7990141379</p>
            <div class="soc" style={{marginTop:"50px"}}>
               <a target={"_blank"} href="https://github.com/dinesh0085" target="_blank"><img style={{width:"30px",marginRight:"20px",borderRadius:"1rem"}} src={GITHUB}></img></a>
               <a target={"_blank"} href="https://www.linkedin.com/in/dinesh-solanki/" target="_blank"><img style={{width:"30px"}} src={LINKEDIN}></img></a>
            </div>
            <a href={resume} download="Dinesh-Solanki-Resume" class="btn btn2">Download CV</a>
       
       
            <div class="copyrights">
        <p>Copyright @ Dinesh. Made By Me</p>
    </div>
 


   </div>

  
      

        


        </div>


  );
}

export default App;
