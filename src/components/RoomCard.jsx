

const RoomCard = ({room}) => {
    return (
        <div>
          
    <div  className="bg-white w-80 p-5  rounded-xl shadow-lg  border border-blue-200" >
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p>{room.members} Members</p>
            <button className="btn btn-warning mt-3">Open Room</button>
        </div>
        </div>
       
    );
};

export default RoomCard;