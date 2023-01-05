import favicon from "../../public/favicon.png";
import profileImg from "../../public/images/profile-photo.jpg";
import {Link} from "react-router-dom";
// import {signOut} = from "../../../server/utils/auth";

export default function Nav() {
    const toggleDropdown = () => {
        const dropDown = document.getElementById("dropdown");
        if(dropDown.classList.contains("hidden")) {
            dropDown.classList.remove("hidden");
        } else {
            dropDown.classList.add("hidden");
        }
    };
    const loggedIn = () => {
        const loggedIn = localStorage.getItem("id_token");
        if (loggedIn === null) {
            return false;
        }
        return true;
    };

    return (
        <>
            <nav className="px-1 py-2 md:px-5 md:py-3 bg-white shadow flex justify-between items-center sticky top-0 max-h-16 z-50">
                <a href="/">
                    <div className="flex justify-between items-center w-8 md:w-10">
                        <img src={favicon} alt='Poachd logo, which is an anstract sunny side up egg'/>
                        <h1 className="text-xl mx-2 font-bold absolute md:static opacity-0 md:opacity-100">Poachd</h1>
                    </div>
                </a>
                <form className="md:my-0 w-2/5">
                    <input className='py-1 px-2 text-sm md:text-l w-full border-2 border-slate-300 rounded' type="text" id="search" placeholder='Search'></input>
                </form>
                {loggedIn() && (
                    <div onClick={toggleDropdown} className="md:flex justify-end items-center md:z-auto md:w-auto">
                        <img className='inline-block md:ml-4 rounded-full w-8 md:w-10' src={profileImg} alt="profile icon"/>
                        <p className="inline-block text-lg">▾</p>
                    </div> 
                )}
            </nav>
            <div onClick={toggleDropdown} id="dropdown" className="sticky top-12 md:top-16 z-40 hidden">
                <div className="bg-white absolute top-0 right-0 rounded-b shadow mr-3">
                    <ul className="sticky top-0 p-2 w-26 md:w-36 text-right">
                        <li><button className="bg-amber-300 text-white text-xs md:text-sm mr-2 rounded hover:bg-amber-400 py-1 px-2">New Recipe</button></li>
                        <Link to="/profile"><li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-50">My Profile</li></Link>
                        <Link to="/profile#collections"><li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-50">Collections</li></Link>
                        <Link to="/profile/edit"><li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-50">Settings</li></Link>
                        <hr className="my-1"></hr>
                        <li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-50">Log Out</li>
                    </ul>
                </div>
            </div>
        </>
    );
}