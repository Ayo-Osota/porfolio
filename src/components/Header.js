import { useState } from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";


const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    

    const toggleSidebar = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        } else {
            setIsSidebarOpen(true);
        }
    }

    return (
        <header>
            <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            <Sidenav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        </header>
    )
}

export default Header;