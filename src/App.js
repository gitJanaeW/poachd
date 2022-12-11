import React, {Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav.js";
const Footer = lazy(() => import("./components/Footer.js"));
// const About = lazy(() => import('./components/About'));

const App = () => {
    return(
        <BrowserRouter>
            <Nav/>
                {/* <Suspense fallback={<div style={{minHeight:"10vh"}}></div>}>
                    <Routes>
                        <Route path="/" element={<About/>}/>
                    </Routes>
                </Suspense> */}
            <Footer/>
        </BrowserRouter>
    );
}

export default App;