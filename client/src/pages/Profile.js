import profileImg from "../../public/images/profile-photo.jpg";
import recipeImg from "../../public/images/frontendtest/chili.jpg";
import {useQuery} from "@apollo/client";
import {QUERY_ME} from "../utils/queries.js";
import {Link} from "react-router-dom";

export default function Profile() {
    const token = localStorage.getItem("id_token");
    const {error, data} = useQuery(QUERY_ME, {
        headers: {Authorization: `Bearer ${token}`}
    });
    // Another approach: take the "me" query user._id and use it to queryUser to get the info for this page?
    if (data) console.log(data);
    if (error) console.log(`Error: ${error.message}`);
    if (data) {
        return(
            <div>
                <div className="flex justify-around my-6 max-md:flex-col max-md:flex-wrap">
                    <div className="flex items-center max-md:flex-col">
                        <img className="rounded-full w-40" src={profileImg} alt='Poachd logo, which is an anstract sunny side up egg'/>
                        <div className="px-6">
                            <h3 className="text-4xl font-semibold leading-normal mb-2 max-md:text-center">
                                {data.me.username}
                            </h3>
                            {data.me.style.length ? (
                                    <div className="text-sm mt-0 mb-2 font-bold max-md:text-center uppercase">
                                        {data.me.style[0]}, {data.me.style[1]}, {data.me.style[2]}
                                    </div>
                                ) : null
                            }
                            <Link to="/profile/edit">
                                <button className="max-sm:flex bg-amber-300 text-white font-medium mx-auto px-6 py-2 hover:bg-amber-400 rounded hover:shadow-md shadow">
                                    EDIT
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-around pt-6">
                        <div>
                            <span className="text-xl font-bold block text-center px-6">22</span><span className="text-sm">Following</span>
                        </div>
                        <div>
                            <span className="text-xl font-bold block text-center px-6">58</span><span className="text-sm">Followers</span>
                        </div>
                        <div>
                            <span className="text-xl font-bold block text-center px-6">38</span><span className="text-sm">Recipes</span>
                        </div>
                        <div>
                            <span className="text-xl font-bold block text-center px-6">95</span><span className="text-sm">Poaches</span>
                        </div>
                    </div>
                </div>
                {data.me.description ? (
                    <p className="mb-4 text-lg w-5/6 m-auto text-center">{data.me.description}</p>
                ) : null}
                <hr className="m-16"></hr>
                    <div className="ml-4">
                        <button id="collections" className="bg-amber-300 text-white font-medium duration-500 px-6 py-2 mr-3 mt-2 hover:bg-amber-400 rounded-full hover:shadow-md shadow" type="button">
                            COLLECTIONS
                        </button>
                        <button className="bg-amber-300 text-white font-medium duration-500 px-6 py-2 mr-3 mt-2 hover:bg-amber-400 rounded-full hover:shadow-md shadow" type="button">
                            RECIPES
                        </button>
                        <button className="bg-amber-300 text-white font-medium duration-500 px-6 py-2 mr-3 mt-2 hover:bg-amber-400 rounded-full hover:shadow-md shadow" type="button">
                            POACHES
                        </button>
                    </div>
                    <div className="m-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div className="flex flex-col space-y-4">
                        <div>
                            <img className="object-cover rounded-xl h-80 lg:w-full w-screen" src={recipeImg} alt="recipe"/>
                        </div>
                        <div>
                            <h2 className="text-lg">Favorites</h2>
                            <p className="text-slate-400">44 Recipes</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}