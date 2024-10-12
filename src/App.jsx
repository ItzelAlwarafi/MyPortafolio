import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ProjectsData from './components/ProjectsData'
import './app.css'

export default function app (){
    
    return (
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsData />} />
        </Routes>
    )


}