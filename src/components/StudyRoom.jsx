import RoomCard from "./RoomCard";


const StudyRoom = () => {
    return (
        <div className="flex justify-between mt-6">
            <h1 className="text-lg font-bold">My Rooms</h1>
            
            <div className="flex gap-6  ">
              <button className="bg-cyan-200  rounded-box p-2  hover:bg-blue-200 ">Join Room</button>
              <button className="bg-emerald-200  rounded-box p-2  hover:bg-green-400">+ Create Room</button>
            </div>
            {/* <div>
                <RoomCard/>
            </div> */}
        </div>
        
    );
};

export default StudyRoom;