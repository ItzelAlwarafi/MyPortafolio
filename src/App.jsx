import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Project from './components/DeenHub/Project'
import './app.css'

export default function app (){
    
    return (
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<Project />} />
        </Routes>
    )


}