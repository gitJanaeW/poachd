import profileImg from "../../public/images/profile-photo.jpg";
import {useQuery} from "@apollo/client";
import {QUERY_ME} from "../utils/queries.js";

export default function EditProfile () {
    const token = localStorage.getItem("id_token");
    const {error, data} = useQuery(QUERY_ME, {
        headers: {Authorizaton: `Bearer ${token}`}
    });
    if (data) {
        return(
            <form className="w-full max-w-lg my-6 md:mx-8">
                <img className="rounded-full w-40" src={profileImg} alt='Poachd logo, which is an anstract sunny side up egg'/>
                <div className="bg-gray-400 text-white w-7 rounded text-center text-lg relative left-32 bottom-10">✎</div>
                <div className="flex flex-wrap my-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block text-xs font-bold mb-2" htmlFor="grid-first-name">USERNAME</label>
                        <div className="block w-full h-12 bg-gray-200 border border-gray-300 text-gray-700 sm:text-sm rounded-lg py-3 px-4 mb-3">{data.me.username}</div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block text-xs font-bold mb-2" htmlFor="grid-last-name">STYLE <span>(THREE WORDS)</span></label>
                    <input className="block w-full bg-gray-50 border border-gray-300 sm:text-sm rounded-lg py-3 px-4" id="grid-last-name" type="text" placeholder="Vegan, Mild, Organic"/>
                    <p className="text-gray-600 text-xs italic m-1">Describe your food lifestyle in 3 delicious words</p>
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                    <label className="block text-xs font-bold mb-2" htmlFor="grid-password">
                        DESCRIPTION
                    </label>
                    <textarea className="block w-full h-36 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg py-3 px-4" id="grid-password" placeholder="I studied cooking in 'Le Cordon Bleu' and now work in four restaurants, two of them with Michelin stars."/>
                    <p className="text-gray-600 text-xs italic m-1">Word count: 0/180</p>
                    </div>
                </div>
                <div className="flex flex-wrap mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block text-xs font-bold mb-2" htmlFor="grid-state">
                        State
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                </div>
            </form>
        );
    }
    
};