import { Link } from "react-router-dom"


export default function ProjectsList () {
    return(
        <div className="project-list-container">
       <h1 className="Bold-text-titles-Back">PROJECTS </h1>
            <h1 className="Bold-text-titles">PROJECTS </h1>
            <Link to="/project" className="project-link" id="home-menu-icon">
            <div className="project-item-DeenHub">
        <img className="logo" src="DeenHubsvg.svg"></img>
            <h1 className="project-title"> DeenHub</h1>
            <a href="website-13976b47.eki.srw.mybluehost.me" className="icon-sideBar">
        <FaGithub />
       </a>


        </div>
                </Link>
       


            
       </div> 
    )
}