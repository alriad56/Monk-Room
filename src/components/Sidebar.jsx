import { Link } from "react-router";

const Sidebar = () => {
   
    return (
       <aside className='w-64 min-h-screen  bg-gray-200 p-5 '>
        <ul>
            <li className="mb-4"><Link to="/">Home</Link></li>
            <li className="mb-4"> <Link to="/StudyRoom">Study Room</Link></li>
            <li className="mb-4"> <Link to="/Notes">Notes</Link></li>
            <li className="mb-4"> <Link to="/QuickNotes">QuickNotes</Link></li>
            <li className="mb-4"> <Link to="/ShareNotes">ShareNotes</Link></li>
            <li className="mb-4">Campus Connect</li>
            <li className="mb-4">Profile</li>
            <li className="mb-4">Settings</li>

        </ul>
       </aside>
    );
};

export default Sidebar;