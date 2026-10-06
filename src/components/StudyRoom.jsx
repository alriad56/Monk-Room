import RoomCard from "./RoomCard";



const StudyRoom = () => {
    const rooms = [
        {
            id:1,
            name: "DSA Study Group",
            description: "Learn DSA together",
            members:12
        },
        {
            id: 2,
            name: "Web Development",
            description: "MERN stack learners",
            members: 20
        },
        {
            id: 3,
            name: "Thesis Group",
            description: "Research and thesis discussion",
            members: 8
        }

    ]
    return (
        <div>
          
          <div className="flex justify-between mt-6">
             <h1 className="text-lg font-bold">My Rooms</h1>
             
        
        <div className="flex gap-6  ">
          <button className="bg-cyan-200  rounded-box p-2  hover:bg-blue-200 ">Join Room</button>
          <button className="bg-emerald-200  rounded-box p-2  hover:bg-green-400">+ Create Room</button>
        
        </div>
       
    </div>

        <div className="flex  flex-col md:flex-row gap-5 mt-6">
            {rooms.map(room => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
    </div>
);
        
    
};

export default StudyRoom;