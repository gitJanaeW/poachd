import {useState} from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth.js";
import {ADD_USER} from "../utils/mutations.js";

export default function SignUp() {
    const [form, setForm] = useState({username: "", email: "", password: ""});
    const [addUser] = useMutation(ADD_USER);
    const submitForm = async (e) => {
        e.preventDefault();
        let test = {username: form.username, email: form.email, password: form.password}
        console.log("username:", form.username);
        console.log("email:", form.email);
        console.log("password:", form.password);
        const newUserData = await addUser({
            variables: {
                username: form.username,
                email: form.email,
                password: form.password
            }
        });
        const token = newUserData.data.addUser.token;
        Auth.login(token);
    }
    const formChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
        console.log("form", form);
    }

    return (
        <section className="bg-amber-300">
            <div className="rounded-lg sm:max-w-md xl:p-0">
                <div className="p-6 my-auto">
                    <h1 id="signup" className="text-xl font-bold md:text-2xl my-5">
                        Create an account
                    </h1>
                    <form onSubmit={submitForm}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input onChange={formChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium ">Username</label>
                            <input onChange={formChange} type="username" name="username" id="username" placeholder="Username" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                            <input onChange={formChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        </div>
                        <button type="submit" className="bg-amber-100 font-medium duration-500 px-6 py-2 mr-3 mt-2 hover:bg-amber-400 rounded-full hover:shadow-md shadow">
                            Sign Up
                        </button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline ">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}