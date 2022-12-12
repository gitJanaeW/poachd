export default function SignUp() {
    return(
        <section class="bg-amber-300">
            <div class="rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold md:text-2xl ">
                        Create an account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label for="username" class="block mb-2 text-sm font-medium ">Username</label>
                            <input type="username" name="username" id="username" placeholder="Username" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium ">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        </div>
                        <button type="submit" class="bg-amber-100 font-medium duration-500 px-6 py-2 mr-3 mt-2 hover:bg-amber-400 rounded-full hover:shadow-md shadow">
                            Create an account
                        </button>
                        <p class="text-sm font-light text-gray-500">
                            Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline ">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}