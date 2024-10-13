import { Outlet } from "react-router-dom"
import Navbar from "../pages/shared/Navbar"
import Footer from "../pages/shared/Footer"
import LeftSidebar from './../pages/shared/LeftSidebar';
import RightSidebar from './../pages/shared/RightSidebar';

const Root = () => {
  return (
    <div className='bg-blue-950 bg-opacity-45 max-w-7xl mx-auto lg:px-4 font-chakraPatch'>
      <Navbar />
      <div className='flex min-h-[80vh] border-2'>
        <LeftSidebar />
        <div className='w-[calc(100vw-20px)]'>
          <Outlet />
        </div>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}
export default Root