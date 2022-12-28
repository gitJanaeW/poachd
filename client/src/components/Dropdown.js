export default function Dropdown() {
    const toggleDropdown = (e) => {
        // e.preventDefault();
        const parent = e.currentTarget;
        console.log(parent);
    };
    return (
        <div onClick={toggleDropdown} className="bg-white sticky top-16 py-2 w-24 md:w-36 ml-auto md:mr-6 rounnded shadow">
            <ul className="text-right mx-2">
                <li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-100">My Profile</li>
                <li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-100">Collections</li>
                <li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-100">Settings</li>
                <hr className="my-1"></hr>
                <li className="text-xs md:text-sm pl-12 pr-3 py-1 hover:bg-slate-100">Log Out</li>
            </ul>
        </div>
    );
};