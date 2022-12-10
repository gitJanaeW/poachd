import React, {Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav.js";
// const About = lazy(() => import('./components/About'));

const App = () => {
    return(
        <BrowserRouter>
            <Nav/>
            <h1 className="bg-red-900 text-yellow">Hi, I'm React, Webpack</h1>
                {/* <Suspense fallback={<div style={{minHeight:"10vh"}}></div>}>
                    <Routes>
                        <Route path="/" element={<About/>}/>
                    </Routes>
                </Suspense> */}
            {/* <Footer/> */}
        </BrowserRouter>
    );
}

export default App;