/* eslint-disable @typescript-eslint/no-explicit-any */


import { Outlet } from "react-router-dom"
import SideBar from "../Components/SideBar"
        

const Main = () => {
  return (
    <div>
      <div className='flex' style={{ height: '100vh', backgroundColor: 'full' }}>
        <div className="min-h-full h-full bg-sidebar">
          <SideBar/>
        </div>
        <div className="surface-300">
          <div className="ml-3 mr-3  mt-3" >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main