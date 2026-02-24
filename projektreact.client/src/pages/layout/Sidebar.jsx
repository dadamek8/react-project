import { Link } from 'react-router-dom';
import { Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaUserTie, FaUser, FaUsers, FaCalendarAlt, FaTasks, FaFileAlt, FaBullhorn, FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Sidebar = ({ showSidebar, handleMenuItemClick, currentTime, currentDate, setShowSidebar }) => {
    return (
        <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="start">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ backgroundImage: `url(bluee.jpg)`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Nav className="flex-column">
                    <Nav.Link onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                        <Link to="/" className="d-block"><FaHome /> Strona Glowna</Link>
                    </Nav.Link>
                    <NavDropdown title={<span style={{ color: 'black', fontSize: '2em' }}><FaUserTie /> Dla pracodawcy</span>} id="dropdown-pracodawcy">
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/pracownicy" className="d-block"><FaUsers /> Pracownicy</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/grafik" className="d-block"><FaCalendarAlt /> Grafik</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/projekty-i-zadania" className="d-block"><FaTasks /> Projekty i zadania</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/wnioski" className="d-block"><FaFileAlt /> Wnioski</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/komunikaty" className="d-block"><FaBullhorn /> Komunikaty</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span style={{ color: 'black', fontSize: '2em' }}><FaUser /> Dla pracownika</span>} id="dropdown-pracownik">
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/rejestracja-czasu-pracy" className="d-block"><FaClock /> Rejestracja czasu pracy</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/grafik-pracownika" className="d-block"><FaCalendarAlt /> Grafik</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/projekty-i-zadania-pracownika" className="d-block"><FaTasks /> Projekty i zadania</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/wnioski-pracownika" className="d-block"><FaFileAlt /> Wnioski</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={handleMenuItemClick} style={{ color: 'black', fontSize: '2em' }}>
                            <Link to="/komunikaty-pracownika" className="d-block"><FaBullhorn /> Komunikaty</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <span className="current-time" style={{ fontSize: '2em', marginTop: 'auto', marginBottom: '20px' }}>{currentTime.toLocaleTimeString()}</span>
                <span className="current-date" style={{ fontSize: '2em' }}>{currentDate.toLocaleDateString()}</span>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

Sidebar.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
    handleMenuItemClick: PropTypes.func.isRequired,
    currentTime: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date).isRequired,
    setShowSidebar: PropTypes.bool.isRequired
};

export default Sidebar;