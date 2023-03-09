import './index.scss'
import SideBar from '../SideBar'
import { Outlet } from 'react-router-dom'
import Footer from '../SideBar/Footer'

const Layout = () => {
  return (
    <div className='application'>
      <SideBar />
      {/* <About /> */}
    <div className='page'>
      
        <Outlet />

    </div>
    <Footer />
    </div>
  )
}

export default Layout
