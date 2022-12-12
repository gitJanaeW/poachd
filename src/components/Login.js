export default function Login() {
    return(
        <>
            <section className="bg-amber-300">
                <div className="rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 id="login" className="text-xl font-bold md:text-2xl ">
                            Log in
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium ">Username</label>
                                <input type="username" name="username" id="username" placeholder="Username" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                            </div>
                            <button type="submit" className="bg-amber-100 font-medium duration-500 px-6 py-2 mr-3 mt-2 hover:bg-amber-400 rounded-full hover:shadow-md shadow">
                                Log In
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Don't have an account? <a href="#" className="font-medium text-primary-600 hover:underline ">Sign up here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}