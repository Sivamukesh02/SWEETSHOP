import React,  { useEffect, useState } from 'react';
import Home from './Components/Home';
import { HashRouter,Routes,Route } from 'react-router-dom';

function App(){
        useEffect(() => {
        // Initializing AOS components animation parameters controls parameters dynamically to prevent layer hides overrides triggers limits setups rules
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </HashRouter>
    );
}
export default App;