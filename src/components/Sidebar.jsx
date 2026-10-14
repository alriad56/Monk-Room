
import { useState } from 'react';
import { Link } from "react-router";

const Sidebar = () => {
    const [roomsOpen, setRoomsOpen] = useState(false);
    return (
       <aside className='w-64 min-h-screen  bg-gray-200 p-5 '>
        <ul>
            <li className="mb-4"><Link to="/">Home</Link></li>
            

<div>

    <button
        onClick={() => setRoomsOpen(!roomsOpen)}
        className="w-full flex justify-between items-center mb-4 rounded-lg hover:bg-gray-100"
    >
        <span>Rooms</span>

        <span>
            {roomsOpen ? "▲" : "▼"}
        </span>

    </button>

    {/* Sub Categories */}

    {roomsOpen && (

        <div className="ml-5 mt-2 space-y-2">

            <Link
                to="/StudyRoom"
                className="block p-2 rounded-lg hover:bg-gray-100"
            >
                Study Room
            </Link>

           

            <Link
                to="/ProjectRoom"
                className="block p-2 rounded-lg hover:bg-gray-100"
            >
                Project Room
            </Link>

        </div>

    )}

</div>
            <li className="mb-4"> <Link to="/Notes">Notes</Link></li>
            <li className="mb-4"> <Link to="/QuickNotes">QuickNotes</Link></li>
            <li className="mb-4"> <Link to="/ShareNotes">ShareNotes</Link></li>
            <li className="mb-4"><Link to="/CampusConnect">Campus Connect</Link></li>
            <li className="mb-4">Profile</li>
            <li className="mb-4">Settings</li>

        </ul>
       </aside>
    );
};

export default Sidebar;