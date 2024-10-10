import SideBar from './sideBar'
import AboutMe from './aboutMe'
import Projects from './projectsList'
import Footer from './footer'
import WelcomePage from ".//welcomePage"
import Skills from './skills'


export default function LandingPage () {


   return(

<div className='AppContainer'>
            <div className='sideBar'>
                <SideBar/>
             </div> 
        <div className='AppContentContainer'>

            <div className='welcomePage'>
                <WelcomePage />
            </div>
            <div className='aboutMe'>
                <AboutMe/>
            </div>
            <div className='skills'>
                <Skills/>
            </div>
            <div className='projectsContainer'>
                <Projects/>
            </div>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
       
       
        </div>

   )


}