import './App.css';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="welcome-container">
        <div className="welcome-message">
                <h2>Czesc, Adam! Milo Cie widziec. Co dzisiaj robimy?</h2>
            </div>
        <CardGroup>
            <div className="link-card">
            <Link to="/wnioski">
            <Card>
                <Card.Img className="card-image" variant="top" src="wniosek.jpg" />
                <Card.Body>
                    <Card.Title>Przejrzyj otrzymane wnioski</Card.Title>
                    <Card.Text>
                     Ilosc wnioskow czekajacych na zatwierdzenie: 5
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"> Ostatni wniosek otrzymano 10 min temu</small>
                </Card.Footer>
                </Card>
                </Link>
            </div>
            <div className="link-card">
                <Link to="/grafik">
            <Card>
                <Card.Img className="card-image" variant="top" src="schedule.jpg" />
                <Card.Body>
                    <Card.Title>Sprawdz swoj harmonogram</Card.Title>
                    <Card.Text>
                                <u>Najblizsze wydarzenie:</u>  Spotkanie z firma ABC - Dzisiaj, 14:00
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"> Ilosc pozostalych wydarzen w tym tygodniu: 7</small>
                </Card.Footer>
                    </Card>
                </Link>
            </div>
            <div className="link-card">
                <Link to="/projekty-i-zadania">
            <Card>
                <Card.Img className="card-image" variant="top" src="project.jpg" />
                <Card.Body>
                    <Card.Title>Przejrzyj stan projektow</Card.Title>
                    <Card.Text>
                        Projekty czekajace na zatwierdzenie: 2
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Aktywne projekty: 12 | Nieaktywne projekty: 5</small>
                </Card.Footer>
                    </Card>
                </Link>
            </div>
            </CardGroup>
            <div className="carousel-container">
                <Carousel className="carousel">
                    <Carousel.Item>
                        <Link to="/pracownicy">
                        <img
                            className="d-block w-100 carousel-image"
                            src="attendance.jpg"
                            alt="First slide"
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                        <Carousel.Caption className="shadow-font">
                            <h3>Sprawdz obecnosc pracownikow</h3>
                            <h5>Dzisiejsza frekwencja: 96%</h5>
                            </Carousel.Caption>
                        </Link>
                        </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/komunikaty">
                        <img
                            className="d-block w-100 carousel-image"
                            src="newfeatures.jpg"
                            alt="Second slide"
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                        <Carousel.Caption className="shadow-font">
                            <h3>Sprawdz nowe funkcje aplikacji</h3>
                            <h5>Ostatnia aktualizacja: 3 maja 2024 15:50</h5>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="maintenance.jpg"
                            alt="Third slide"
                            style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                        <Carousel.Caption className="shadow-font">
                            <h3>Planowana przerwa techniczna</h3>
                            <h5>W dniu 12 maja 2015 w godzinach 12:00-13:00 aplikacja moze nie dzialac poprawnie</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            </div>
    );
}

export default App;
