import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { FaBars } from 'react-icons/fa';
import CustomNavbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

export function Layout() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const handleMenuItemClick = () => {
        setShowSidebar(false);
    };

    useEffect(() => {
        setCurrentDate(new Date());
    }, [currentTime]);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setCurrentTime(new Date());
    }

    return (
        <div className="app">
            <CustomNavbar />
            <Sidebar
                showSidebar={showSidebar}
                handleMenuItemClick={handleMenuItemClick}
                currentTime={currentTime}
                currentDate={currentDate}
                setShowSidebar={setShowSidebar}
            />
            <div className="d-flex">
                <button className="btn btn-primary ms-2 mt-2 menu-button" onClick={() => setShowSidebar(true)}><FaBars /> Menu</button>
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
            <Footer />
        </div>
    )
}