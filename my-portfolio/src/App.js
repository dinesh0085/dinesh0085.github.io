import logo02 from "./image/logo02.png"
import resume from "./image/my-cv.pdf"
import profile from "./image/image0 (1).jpeg"
import work01 from "./image/DotAndKey.png"
import work02 from "./image/Shemrush3.png"
import work03 from "./image/Unsplash.png"
import work04 from "./image/Monday.png"
import githubCelender from "./image/Shemrush1.png"
import githubState from "./image/GitHubState.png"
import './App.css';

function App() {
    let sidemenu=document.getElementById("sidemenu")
    let sidemenuStyle={
        background:"#ff004f",
        position:"fixed",
        top:"0",
        right: "-200px",
        width:" 200px",
        height: "100vh",
        paddingTop: "50px",
        zIndex: "2"
    }

    function openmenu(){
        // sidemenu.style.right="0px"
    }

    function closemenu(){
        // sidemenu.style.right="-200px"
    }


  
  return (
    <div className="App">

       <nav>
            <img src={logo02} class="logo" alt="logo"/>
            <ul  id="sidemenu">
                   <li><a href="#header">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#services">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li> <a href={resume} download >Resume</a></li>
            </ul>
        </nav>

<div id="main-container">

<div id="header">
    <div class="container">
       
     <div class="homepage-container">
        <div class="header-text" >
            <p>FULL STACK WEB DEVELOPER</p>
            <h1>Hi,  I'm <br/> <span>Dinesh</span>  Solanki</h1>
            <a href={resume} download class="btn btn2">Download CV</a>
        </div>

        <div class="profile-pic">
            <img src={profile} alt="user"/>
        </div>
        </div>


    </div>
</div>







<div id="about">
        <div class="container">
           
           
           
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

                    
                 <button class=""> <a style={{TextDecoder:"none"}} href="https://netlify-thinks-jdsolankijd123-gmail-com-is-great-2696b.netlify.app/">Deployed Link</a></button>  
                 <button class=""> <a href="https://github.com/dinesh0085/scrawny-liquid-7267/tree/main/scrawny-liquid-7267">Github Link</a></button>  

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


                

                     <button class=""><a href="https://lyrical-toothbrush-5471.netlify.app/">Deployed Link</a></button>  
                     <button class=""> <a href="https://github.com/dinesh0085/-lyrical-toothbrush-5471">Github Link</a></button>  
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
                   
                   <button> <a href="https://fastidious-hotteok-25128b.netlify.app/index.html">Deployed Link</a></button>
                   <button> <a href="https://github.com/dinesh0085/concerned-teeth-2742">GitHub Link</a></button>
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
                   <button> <a href="https://stirring-lollipop-9b03d4.netlify.app/">Deployed Link</a></button>
                   <button> <a href="https://github.com/mukundjha1310/DotandKey.com">GitHub Link</a></button>
            </div>

            </div>
           
        </div>
      
    </div>
   </div>



   <div id="github">
            <h1>GitHub State</h1>
            <br></br>
            <br></br>
            <img width={"80%"} src={githubState}></img>
            <br></br>
            <br></br>
            <br></br>
            <h1>GitHub Calender</h1>
            <br></br>
            <br></br>
            <img width={"80%"}  src={githubCelender}></img>
            </div>


        </div>


  );
}

export default App;
