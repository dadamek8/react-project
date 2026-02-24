import { useState } from 'react';
import { Container, Card, Button, Row, Col, Modal} from 'react-bootstrap';

const currentMessages = [
    { id: 1, title: 'Zmiana godzin pracy', content: 'Od przyszlego miesiaca zmieniaja sie godziny pracy wszystkich...', fullContent: 'Od przyszlego miesiaca zmieniaja sie godziny pracy wszystkich pracownikow. Nowe godziny to 10:00-18:00', read: false },
    { id: 2, title: 'Spotkanie zespolu', content: 'Wszyscy czlonkowie zespolu sa zaproszeni na spotkanie...', fullContent: 'Wszyscy czlonkowie zespolu sa zaproszeni na spotkanie, ktore odbedzie sie 29.05.2024 w sali nr A5', read: true },
    { id: 3, title: 'Nowe zasady BHP', content: 'Przypominamy o nowych zasadach BHP obowiazujacych od...', fullContent: 'Przypominamy o nowych zasadach BHP obowiazujacych od przyszlego tygodnia. Teraz nalezy umyc rece przed wejsciem do sali nr 204', read: false },
];

const pastMessages = [
    { id: 4, title: 'Przerwa serwisowa', content: 'W dniu 28.05.2024 planowana jest przerwa serwisowa...', fullContent: 'W dniu 28.05.2024 planowana jest przerwa serwisowa w godzinach 15:00-16:00', read: true },
    { id: 5, title: 'Urlopy wakacyjne', content: 'Przypominamy o terminach skladania wnioskow urlopowych...', fullContent: 'Przypominamy o terminach skladania wnioskow urlopowych na okres wakacyjny. Ostateczny termin wyslania wniosku to 30 maja 2024', read: true },
];

export const KomunikatyPracownika = () => {
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [currentMessage, setCurrentMessage] = useState({});

    const handleShowMessage = (message) => {
        setCurrentMessage(message);
        setShowMessageModal(true);
    };

    const handleCloseMessageModal = () => setShowMessageModal(false);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Komunikaty</h2>

            <h4 className="text-center mb-3" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Aktualne komunikaty</h4>
            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                {currentMessages.map((message) => (
                    <Col key={message.id}>
                        <Card className={`h-100 ${message.read ? '' : 'border-primary'}`}>
                            <Card.Body>
                                <Card.Title>{message.title}</Card.Title>
                                <Card.Text>
                                    {message.content}
                                </Card.Text>
                                <Button variant="outline-secondary" className="me-2" onClick={() => handleShowMessage(message)}>Zobacz</Button>
                                <Button variant="success">Oznacz jako przeczytane</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h4 className="text-center mb-3" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Dawne komunikaty</h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                {pastMessages.map((message) => (
                    <Col key={message.id}>
                        <Card className="h-100 text-muted">
                            <Card.Body>
                                <Card.Title>{message.title}</Card.Title>
                                <Card.Text>
                                    {message.content}
                                </Card.Text>
                                <Button variant="outline-secondary" onClick={() => handleShowMessage(message)}>Zobacz</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showMessageModal} onHide={handleCloseMessageModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentMessage.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{currentMessage.fullContent}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseMessageModal}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
};
