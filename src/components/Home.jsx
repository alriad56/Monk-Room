import StudyRoom from "./StudyRoom";

const Home = () => {
    return (
        <div>
           
            <div className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl text-white w-full min-h-[300px] p-6 mx-auto">

                <h1>Good Evening</h1>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>

                <div className="flex justify-center gap-7">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                        <h1>3</h1>
                        <h2>Notes This Week</h2>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                        <h1>2</h1>
                        <h2>Deadlines Soon</h2>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                        <h1>4</h1>
                        <h2>Active Rooms</h2>
                    </div>
                </div>
            </div>

            
            <StudyRoom />
        </div>
    );
};

export default Home;