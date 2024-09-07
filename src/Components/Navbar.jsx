/* eslint-disable no-unused-vars */
import React  from 'react'
import HiddenNavbar from './HiddenNavbar'
import LargeScreenNavbar from './LargeScreenNavbar'

const Navbar = () => {
  const NavArray=[{name:"Services",},{name:"Work"},{name:"About"},{name:"Blog"},{name:"Contact"}]
  return (

    <div className="   flex min-h-24 items-center justify-center pt-3  w-full">
    <div
      className="min-h-10  xl:w-[60%] lg:w-[80%] slg:w-[90%] w-[90%]  xl:px-9 lg:px-9 px-3 py-5 sticky top-5 left-0 xl:rounded-full lg:rounded-full rounded-xl bg-gray-200 flex items-center bg-clip-padding backdrop-filter backdrop-blur-2xl xl:bg-opacity-30 lg:bg-opacity-30 bg-opacity-100 border border-gray-100   "
    >
  <LargeScreenNavbar NavArray={NavArray}/>
        <HiddenNavbar NavArray={NavArray}/>
  
      </div>
     </div>
  );
};

export default Navbar;