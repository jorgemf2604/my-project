import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const RootLayout = () => {
  return (
    <main className="root-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
   );
}
 
export default RootLayout;