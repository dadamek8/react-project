import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const pendingRequests = [
    { id: 1, name: 'Teresa Mucha', type: 'Urlop okolicznosciowy', date: '25.05.2024 - 25.05.2024', status: 'pending' },
    { id: 2, name: 'Katarzyna Miodek', type: 'Urlop macierzynski', date: '26.05.2024 - 26.09.2024', status: 'pending' },
    { id: 3, name: 'Andrzej Kwiatkowski', type: 'Urlop wypoczynkowy', date: '05.07.2024 - 19.07.2024', status: 'pending' },
    { id: 4, name: 'Kamil Zawadzki', type: 'Urlop wypoczynkowy', date: '20.07.2024 - 04.08.2024', status: 'pending' },
    { id: 5, name: 'Teresa Mucha', type: 'Urlop wypoczynkowy', date: '05.08.2024 - 19.08.2024', status: 'pending' },
];

const resolvedRequests = [
    { id: 6, name: 'Adam Pawlak', type: 'Urlop okolicznosciowy', date: '01.05.2024 - 02.05.2024', status: 'approved' },
    { id: 7, name: 'Katarzyna Miodek', type: 'Urlop wypoczynkowy', date: '10.04.2024 - 20.04.2024', status: 'rejected' },
];

export const Wnioski = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const handleShowModal = (request) => {
        setSelectedRequest(request);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Wnioski Pracownikow</h2>
            <h4 className="text-center mb-3">Wnioski do rozpatrzenia</h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                {pendingRequests.map((request, index) => (
                    <Col key={request.id} className={index >= 3 ? 'w-100' : ''}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{request.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{request.type}</Card.Subtitle>
                                <Card.Text>
                                    Data: {request.date}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleShowModal(request)}>Zobacz szczegoly</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h4 className="text-center mt-5 mb-3">Rozpatrzone wnioski</h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                {resolvedRequests.map((request) => (
                    <Col key={request.id}>
                        <Card className="h-100" bg={request.status === 'approved' ? 'success' : 'danger'} text="white">
                            <Card.Body>
                                <Card.Title>{request.name}</Card.Title>
                                <Card.Subtitle className="mb-2">{request.type}</Card.Subtitle>
                                <Card.Text>
                                    Data: {request.date}
                                </Card.Text>
                                <Card.Text>
                                    Status: {request.status === 'approved' ? 'Zatwierdzony' : 'Odrzucony'}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Szczegoly Wniosku</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedRequest && (
                        <div>
                            <p><strong>Imie i nazwisko:</strong> {selectedRequest.name}</p>
                            <p><strong>Typ wniosku:</strong> {selectedRequest.type}</p>
                            <p><strong>Data:</strong> {selectedRequest.date}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseModal}>Zatwierdz</Button>
                    <Button variant="danger" onClick={handleCloseModal}>Odrzuc</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};
