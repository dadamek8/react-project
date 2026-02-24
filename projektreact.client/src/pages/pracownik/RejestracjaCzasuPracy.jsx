import { useState, useEffect } from 'react';
import { Container, Button, Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

export const RejestracjaCzasuPracy = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [workLogs, setWorkLogs] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleStartWork = () => {
        setStartTime(new Date());
    };

    const handleEndWork = () => {
        if (startTime) {
            const endTime = new Date();
            setEndTime(endTime);
            const duration = (endTime - startTime) / (1000 * 60 * 60);
            setWorkLogs([...workLogs, { startTime, endTime, duration }]);
            setStartTime(null);
            setEndTime(null);
        }
    };

    const formatTime = (time) => {
        return time ? time.toLocaleTimeString() : '--:--:--';
    };

    const formatDuration = (duration) => {
        return duration ? `${duration.toFixed(2)} h` : '--';
    };

    const totalWorkTime = workLogs.reduce((acc, log) => acc + log.duration, 0).toFixed(2);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Rejestracja czasu pracy</h2>
            <Card className="mb-4">
                <Card.Body className="text-center">
                    <h4>Aktualny czas: {currentTime.toLocaleTimeString()}</h4>
                    <div className="my-3">
                        <Button variant="success" onClick={handleStartWork} disabled={!!startTime}>
                            Rozpocznij czas pracy
                        </Button>{' '}
                        <Button variant="danger" onClick={handleEndWork} disabled={!startTime}>
                            Zakoncz czas pracy
                        </Button>
                    </div>
                    <h5>Rozpoczecie: {formatTime(startTime)}</h5>
                    <h5>Zakonczenie: {formatTime(endTime)}</h5>
                </Card.Body>
            </Card>
            <h4 className="text-center mb-3" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Historia rejestracji</h4>
            <Row>
                <Col>
                    <ListGroup>
                        {workLogs.map((log, index) => (
                            <ListGroupItem key={index}>
                                <Row>
                                    <Col>Poczatek: {formatTime(new Date(log.startTime))}</Col>
                                    <Col>Koniec: {formatTime(new Date(log.endTime))}</Col>
                                    <Col>Czas pracy: {formatDuration(log.duration)}</Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                        {workLogs.length === 0 && (
                            <ListGroupItem className="text-center">
                                Brak zapisanych rejestracji.
                            </ListGroupItem>
                        )}
                    </ListGroup>
                </Col>
            </Row>
            <Card className="mt-4">
                <Card.Body className="text-center">
                    <h5>Calkowity czas pracy: {totalWorkTime} h</h5>
                </Card.Body>
            </Card>
        </Container>
    );
};