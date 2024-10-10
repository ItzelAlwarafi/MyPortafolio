import profilePic from '../assets/profilepic.jpeg'


export default function aboutMe (){

    return(
        
        <div className="aboutMe-Container">
            <h1 className="Bold-text-titles-Back">ABOUT ME </h1>
            <h1 className="Bold-text-titles">ABOUT ME </h1>
       
       <div className="aboutMe-picture-statement-container">
       <img src={profilePic} alt="Profile" className="profile-picture" />
        <div className="Personal-Statement">
            <p className="simpleText-format">I’m a passionate developer dedicated to crafting seamless user experiences 
                and robust back-end solutions. I thrive on collaboration and 
                problem-solving to bring ideas to life. 
                </p>
                <h2 className='regular-font-group-messag'> Let's build innovative applications together!</h2>
        </div>

       

        </div>
       </div>

       
    )
}