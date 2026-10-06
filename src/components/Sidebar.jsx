// import { Link } from "react-router";

const Sidebar = () => {
    // const links = <>
    // <Link to="/"><li className="m-2"></li></Link>
    // </>
    return (
       <aside className='w-64 min-h-screen  bg-gray-200 p-5 '>
        <ul>
            <li className="mb-4">Home</li>
            <li className="mb-4">Study Room</li>
            <li className="mb-4">Notes</li>
            <li className="mb-4">Profile</li>
            <li className="mb-4">Settings</li>

        </ul>
       </aside>
    );
};

export default Sidebar;