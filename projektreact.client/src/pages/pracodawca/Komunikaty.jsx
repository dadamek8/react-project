import { useState } from 'react';
import { Container, Card, Button, Row, Col, Modal, Form, FloatingLabel, Stack } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const currentMessages = [
    { id: 1, title: 'Zmiana godzin pracy', content: 'Od przyszlego miesiaca zmieniaja sie godziny pracy wszystkich...', fullContent: 'Od przyszlego miesiaca zmieniaja sie godziny pracy wszystkich pracownikow. Nowe godziny to 10:00-18:00', read: false },
    { id: 2, title: 'Spotkanie zespolu', content: 'Wszyscy czlonkowie zespolu sa zaproszeni na spotkanie...', fullContent: 'Wszyscy czlonkowie zespolu sa zaproszeni na spotkanie, ktore odbedzie sie 29.05.2024 w sali nr A5', read: true },
    { id: 3, title: 'Nowe zasady BHP', content: 'Przypominamy o nowych zasadach BHP obowiazujacych od...', fullContent: 'Przypominamy o nowych zasadach BHP obowiazujacych od przyszlego tygodnia. Teraz nalezy umyc rece przed wejsciem do sali nr 204', read: false },
];

const pastMessages = [
    { id: 4, title: 'Przerwa serwisowa', content: 'W dniu 28.05.2024 planowana jest przerwa serwisowa...', fullContent: 'W dniu 28.05.2024 planowana jest przerwa serwisowa w godzinach 15:00-16:00', read: true },
    { id: 5, title: 'Urlopy wakacyjne', content: 'Przypominamy o terminach skladania wnioskow urlopowych...', fullContent: 'Przypominamy o terminach skladania wnioskow urlopowych na okres wakacyjny. Ostateczny termin wyslania wniosku to 30 maja 2024', read: true },
];

const employees = [
    { id: 1, name: 'Teresa Mucha' },
    { id: 2, name: 'Katarzyna Miodek' },
    { id: 3, name: 'Andrzej Kwiatkowski' },
    { id: 4, name: 'Kamil Zawadzki' },
];

export const Komunikaty = () => {
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [currentMessage, setCurrentMessage] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    const handleShowMessage = (message) => {
        setCurrentMessage(message);
        setShowMessageModal(true);
    };

    const handleCloseMessageModal = () => setShowMessageModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => setShowAddModal(false);

    const handleEmployeeSelect = (id) => {
        if (id === 'all') {
            setSelectedEmployees(employees.map(emp => emp.id));
        } else {
            setSelectedEmployees(prevSelected =>
                prevSelected.includes(id)
                    ? prevSelected.filter(empId => empId !== id)
                    : [...prevSelected, id]
            );
        }
    };

    const isAllSelected = selectedEmployees.length === employees.length;

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Komunikaty</h2>
            <Stack direction="horizontal" gap={3} className="mb-4 justify-content-center">
                <Button variant="primary" onClick={handleShowAddModal}>Dodaj Komunikat</Button>
            </Stack>
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

            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj nowy komunikat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FloatingLabel controlId="messageTitle" label="Naglowek komunikatu" className="mb-3">
                            <Form.Control type="text" placeholder="Naglowek komunikatu" />
                        </FloatingLabel>
                        <FloatingLabel controlId="messageContent" label="Tresc komunikatu" className="mb-3">
                            <Form.Control as="textarea" placeholder="Tresc komunikatu" style={{ height: '100px' }} />
                        </FloatingLabel>
                        <Form.Group className="mb-3">
                            <Form.Label>Data wyswietlenia komunikatu</Form.Label>
                            <Row>
                                <Col>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="dd.MM.yyyy"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Form.Label>Data wygasniecia komunikatu</Form.Label>
                            <Row>
                                <Col>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        dateFormat="dd.MM.yyyy"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Do kogo ma byc skierowany</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label="Wszyscy"
                                checked={isAllSelected}
                                onChange={() => handleEmployeeSelect('all')}
                            />
                            {employees.map(emp => (
                                <Form.Check
                                    key={emp.id}
                                    type="checkbox"
                                    label={emp.name}
                                    checked={selectedEmployees.includes(emp.id)}
                                    onChange={() => handleEmployeeSelect(emp.id)}
                                />
                            ))}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModal}>
                        Zamknij
                    </Button>
                    <Button variant="primary" onClick={handleCloseAddModal}>
                        Dodaj Komunikat
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};
