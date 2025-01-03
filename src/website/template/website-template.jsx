import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const WebsiteTemplate = () => {
  return (
    <>
      <Navbar/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default WebsiteTemplate;