import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import SignIn from './pages/Sign/Sign'

export const baseUrl = 'http://127.0.0.1:8000/api/'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sign-in" element={<SignIn/>}/>
            </Routes>
        </Router>
    );
}

export default App;
