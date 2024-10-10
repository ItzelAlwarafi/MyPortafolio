import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function sideBar (){
    return (
    <div className=" sideBar-Link-container" >
       <a href="https://github.com/ItzelAlwarafi" className="icon-sideBar">
        <FaGithub />
       </a>
       < a href="https://www.linkedin.com/in/itzelalwarafi/" className="icon-sideBar">
       <FaLinkedin />
       </a>
       < a href="" className="icon-sideBar">
       <MdEmail />
       </a>
       
    </div>
   
    )
}
   


