import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Container className="d-flex justify-content-center align-items-center vh-100">
                    <span style={{ fontSize: '2em', marginTop: 'auto', marginBottom: '20px' }}>Wszelkie prawa zastrzezone - 2024</span>
                </Container>
            </Container>
        </footer>
    );
};

export default Footer;