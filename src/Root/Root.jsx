
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import StudyRoom from '../components/StudyRoom';

const Root = () => {
    return (
        <div>
            <Navbar />

            <div className="flex">
                <Sidebar />
        
                <main className="flex-1 px-6 md:px-10">
                    <Outlet />
                    <StudyRoom/>
                </main>
               
            </div>
          
            <Footer />
        </div>
            
    );
};

export default Root;