
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Root = () => {
    return (
        <div className='min-h-screen'>
            {/* <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            <Footer></Footer> */}
        <Navbar/>

        <div className='flex'>
                <Sidebar/>

                <main className='flex-1'>
                   <div className='max-w-7xl mx-auto px-6 py-6'>
                    <Outlet/>
                    </div> 
                </main>
        </div>
            <Footer/>
        </div>
    );
};

export default Root;