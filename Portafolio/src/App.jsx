import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import './app.css'

export default function app (){
    
    return (
        <Routes>
        <Route path="/" element={<LandingPage />} />
        </Routes>
    )


}