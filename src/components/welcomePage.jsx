import welcomeImage from '../assets/welcomeImage.jpg'

export default function WelcomePage() {
    return (
        <div
            className="welcome-page-container"
            style={{ backgroundImage: `url(${welcomeImage})` }} 
        >
            <div className="intro-message">
                <h2 className="regular-font-group">Hello, my name is</h2>
                <h1 className="bold-font-group">ITZEL ALWARAFI</h1>
                <h2 className="regular-font-group">I'm a Full Stack Software Developer</h2>
            </div>
        </div>
    )
}
