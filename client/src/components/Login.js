import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth.js"
import {LOGIN} from "../utils/mutations.js";

export default function Login() {
    const [form, setForm] = useState({email: "", password: ""});
    const [login] = useMutation(LOGIN);
    const submitForm = async (e) => {
        e.preventDefault();
        const loggedInUser = await login({
            variables: {
                email: form.email,
                password: form.password
            }
        });
        const token = loggedInUser.data.login.token;
        Auth.login(token);
        console.log(loggedInUser.data);
    }
    const formChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
        console.log(form);
    }

    return(
        <>
            <section className="bg-amber-300">
                <div className="rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 id="login" className="text-xl font-bold md:text-2xl ">
                            Log in
                        </h1>
                        <form onSubmit={submitForm} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email</label>
                                <input onChange={formChange} type="email" name="email" id="email" placeholder="Email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                                <input onChange={formChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                            </div>
                            <button type="submit" className="bg-amber-100 font-medium duration-500 px-6 py-2 mr-3 mt-2 hover:bg-amber-400 rounded-full hover:shadow-md shadow">
                                Log In
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Don't have an account? <Link to="/signup" className="font-medium text-primary-600 hover:underline">Sign up here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}