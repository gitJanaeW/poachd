import React, {Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav.js";
const Landing = lazy(() => import("./pages/Landing.js"));
const Footer = lazy(() => import("./components/Footer.js"));

const App = () => {
    return(
        <BrowserRouter>
            <Nav/>
                <Suspense fallback={<div style={{minHeight:"10vh"}}></div>}>
                    <Routes>
                        <Route path="/" element={<Landing/>}/>
                    </Routes>
                </Suspense>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;