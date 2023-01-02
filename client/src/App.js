import React, {Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav.js";

import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
    // uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
});

// console.log(authLink.concat(httpLink));

const client = new ApolloClient({
    // link: httpLink,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});  

const Landing = lazy(() => import("./pages/Landing.js"));
const Profile = lazy(() => import("./pages/Profile.js"));
const EditProfile = lazy(() => import("./pages/EditProfile.js"));
const Recipe = lazy(() => import("./pages/Recipe.js"));
const Explore = lazy(() => import("./pages/Explore.js"));
const Footer = lazy(() => import("./components/Footer.js"));

const App = () => {
    return(
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Nav/>
                    <Suspense fallback={<div style={{minHeight:"10vh"}}></div>}>
                        <Routes>
                            <Route path="/" element={<Landing/>}/>
                            <Route path="/login" element={<Landing/>}/>
                            <Route path="/signup" element={<Landing/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/profile/edit" element={<EditProfile/>}/>
                            <Route path="/recipe" element={<Recipe/>}/>
                            <Route path="/explore" element={<Explore/>}/>
                        </Routes>
                    </Suspense>
                <Footer/>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;