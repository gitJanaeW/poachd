import LandingImg from "../components/LandingImg.js";
import Login from "../components/Login.js";
import SignUp from "../components/SignUp.js";

export default function Landing() {
    return(
        <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
                <main className="max-w-screen-xl px-4 lg:px-16">
                    <div className="text-left">
                        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                            Their Recipes,
                        </h2>
                        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 my-3 sm:text-5xl sm:leading-none md:text-6xl bg-amber-300">
                            Your Way
                        </h2>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Find the best recipes and make them yours. Then share your modified recipes with the world to see who made it better!
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex justify-start">
                            <div className="rounded-md shadow">
                            <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-amber-300 hover:bg-amber-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                Sign Up
                            </p>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <p  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-amber-100 hover:text-black hover:bg-amber-200 focus:outline-none focus:shadow-outline-indigo focus:transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                Login
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <LandingImg/>
        {/* <Login/> */}
        {/* <SignUp/> */}
    </div>
    );
}