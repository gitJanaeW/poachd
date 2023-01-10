import profileImg from "../../public/images/profile-photo.jpg";
import {useQuery, useMutation} from "@apollo/client";
import {QUERY_ME} from "../utils/queries.js";
import {useState} from "react";
import {UPDATE_USER} from "../utils/mutations.js";

export default function EditProfile () {
    const token = localStorage.getItem("id_token");
    const [form, setForm] = useState({style: "", description: ""});
    const {data} = useQuery(QUERY_ME, {
        headers: {Authorizaton: `Bearer ${token}`}
    });
    const [updateUser, {errorMut, loadingMut, dataMut}] = useMutation(UPDATE_USER);
    const formChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
        console.log(form);
    };
    const submitForm = async (e) => {
        e.preventDefault();
        const userId = data.me._id;
        const styleValue = form.style.split(" ");
        const userDescription = form.description;
        console.log(userId)
        console.log(styleValue)
        console.log(userDescription)
        const updateUserData = await updateUser({
            variables: {
                _id: userId, description: userDescription, style: styleValue
            }
        });
        if(error) console.log("ERROR: ", error);
    };
    if (data) {
        return(
            <form onSubmit={submitForm} className="w-full max-w-lg my-6 md:mx-8">
                <img className="rounded-full w-40" src={profileImg} alt='Poachd logo, which is an anstract sunny side up egg'/>
                <div className="bg-gray-400 text-white w-7 rounded text-center text-lg relative left-32 bottom-10 z-0">✎</div>
                <div className="flex flex-wrap my-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <p className="block text-xs font-bold mb-2">USERNAME</p>
                        <div className="block w-full h-12 bg-gray-200 border border-gray-300 text-gray-700 sm:text-sm rounded-lg py-3 px-4 mb-3">{data.me.username}</div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block text-xs font-bold mb-2" htmlFor="style">STYLE (THREE WORDS)</label>
                        <input onChange={formChange} id="style" name="style" type="text" className="block w-full bg-gray-50 border border-gray-300 sm:text-sm rounded-lg py-3 px-4" placeholder="Vegan, Mild, Organic"/>
                        <p className="text-gray-600 text-xs italic m-1">Describe your food lifestyle in 3 delicious words</p>
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                        <label className="block text-xs font-bold mb-2" htmlFor="description">
                            DESCRIPTION
                        </label>
                        <textarea onChange={formChange} id="description" name="description" type="text" className="block w-full h-36 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg py-3 px-4" placeholder="I studied cooking in 'Le Cordon Bleu' and now work in four restaurants, two of them with Michelin stars."/>
                        <p className="text-gray-600 text-xs italic m-1">Characters: 0/280</p>
                    </div>
                </div>
                <button type="submit" className="bg-amber-300 text-white font-medium px-6 py-2 mr-3 mt-2 hover:bg-amber-400 rounded-full hover:shadow-md shadow">
                    DONE
                </button>
            </form>
        );
    }
};