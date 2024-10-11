import SideBar from './sideBar'
import AboutMe from './aboutMe'
import Footer from './footer'
import WelcomePage from ".//welcomePage"
import Skills from './skills'
import ProjectsList from './ProjectsList'

export default function LandingPage () {


   return(

<div className='AppContainer'>
            <div className='sideBar'>
                <SideBar/>
             </div> 
             <div className='pagecontainerbox'> 

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
                <ProjectsList/>
            </div>
        </div>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
       
       
        </div>

   )


}