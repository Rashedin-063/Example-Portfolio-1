import { Outlet } from "react-router-dom"
import Navbar from "../pages/shared/Navbar"
import Footer from "../pages/shared/Footer"
import LeftSidebar from './../pages/shared/LeftSidebar';
import RightSidebar from './../pages/shared/RightSidebar';

const Root = () => {
  return (
    <div className='bg-gradient-to-tl from-blue-950 via blue-950 to-blue-900  max-w-7xl mx-auto lg:px-4 font-chakraPatch'>
      <Navbar />
      <div className='flex min-h-[80vh]'>
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