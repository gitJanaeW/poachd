import favicon from "../../public/favicon.png";
import profileImg from "../../public/images/profile-photo.jpg";

export default function Nav() {
    const toggleDropdown = () => {
        const dropDown = document.getElementById("dropdown");
        if(dropDown.classList.contains("hidden")) {
            dropDown.classList.remove("hidden");
        } else {
            dropDown.classList.add("hidden");
        }
    };
    return (
        <>
            <nav className="px-1 md:px-5 py-2 bg-white shadow flex justify-between items-center sticky top-0" style={{maxHeight: "68px"}}>
                <a href="/">
                    <div className="flex justify-between items-center w-8 md:w-10">
                        <img src={favicon} alt='Poachd logo, which is an anstract sunny side up egg'/>
                        <h1 className="text-xl mx-2 font-bold absolute md:static opacity-0 md:opacity-100">Poachd</h1>
                    </div>
                </a>
                <form className="md:my-0 w-2/5">
                    <input className='py-1 px-2 text-sm md:text-l w-full border-2 border-slate-300 rounded' type="text" id="search" placeholder='Search'></input>
                </form>
                <div onClick={toggleDropdown} className="md:flex justify-end items-center z-[-1] md:z-auto md:w-auto">
                    <img className='inline-block md:ml-4 rounded-full w-8 md:w-10' src={profileImg} alt="profile icon"/>
                    <p className="inline-block text-lg">▾</p>
                </div> 
            </nav>
            <div onClick={toggleDropdown} id="dropdown" className="bg-white absolute top-16 right-0 rounded-b shadow mr-3 hidden">
                <ul className="text-right mx-2 sticky top-16 py-2 w-26 md:w-36">
                    <li><button className="bg-amber-300 text-white text-xs md:text-sm mr-2 rounded hover:bg-amber-400 py-1 px-2">New Recipe</button></li>
                    <li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-50">My Profile</li>
                    <li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-50">Collections</li>
                    <li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-50">Settings</li>
                    <hr className="my-1"></hr>
                    <li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-50">Log Out</li>
                </ul>
            </div>
        </>
    );
}