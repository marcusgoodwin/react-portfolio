import './index.scss'
import SideBar from '../SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='application'>
      <SideBar />
    <div className='page'>
 
        <Outlet />

    </div>
    </div>
  )
}

export default Layout
