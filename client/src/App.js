import React, {Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav.js";
const Landing = lazy(() => import("./pages/Landing.js"));
const Profile = lazy(() => import("./pages/Profile.js"));
const Recipe = lazy(() => import("./pages/Recipe.js"));
const Explore = lazy(() => import("./pages/Explore.js"));
const Footer = lazy(() => import("./components/Footer.js"));

const App = () => {
    return(
        <BrowserRouter>
            <Nav/>
                <Suspense fallback={<div style={{minHeight:"10vh"}}></div>}>
                    <Routes>
                        <Route path="/" element={<Landing/>}/>
                        <Route path="/login" element={<Landing/>}/>
                        <Route path="/signup" element={<Landing/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/recipe" element={<Recipe/>}/>
                        <Route path="/explore" element={<Explore/>}/>
                    </Routes>
                </Suspense>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;