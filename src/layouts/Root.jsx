import { Outlet } from "react-router-dom"
import Navbar from "../pages/shared/Navbar"
import Footer from "../pages/shared/Footer"
import LeftSidebar from './../pages/shared/LeftSidebar';
import RightSidebar from './../pages/shared/RightSidebar';

const Root = () => {
  return (
    <div className='bg-gradient-to-r from-[#002157] via-blue-900 to-blue-800 max-w-7xl mx-auto  font-josefin'>
      <Navbar />
      <div className='flex min-h-[70vh] relative'>
        <span className='absolute'>
          <LeftSidebar />
        </span>
        <div>
          <Outlet />
        </div>
        <span className='absolute right-5 top-28'>
          <RightSidebar />
        </span>
      </div>
      <Footer />
    </div>
  );
}
export default Root