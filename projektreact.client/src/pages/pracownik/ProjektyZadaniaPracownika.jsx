import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export const ProjektyZadaniaPracownika = () => {
    return (
        <div className="margines">
            <Container fluid>
                <Row>
                    <Tabs defaultActiveKey="projekty" id="projektyIZadania" className="mb-3">
                        <Tab eventKey="projekty" title={<span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'black' }}>Twoje Projekty</span>}>
                            <div className="text-center mb-4">
                                <h3 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Aktywne Projekty</h3>
                            </div>
                            <Table striped bordered hover className="mt-4">
                                <thead>
                                    <tr>
                                        <th>Nazwa projektu</th>
                                        <th>Osoby odpowiedzialne</th>
                                        <th>Data rozpoczecia</th>
                                        <th>Planowana data zakonczenia</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Projekt A</td>
                                        <td>Adam Pawlak, Katarzyna Miodek</td>
                                        <td>01.01.2024</td>
                                        <td>24.05.2024</td>
                                        <td><Button variant="success" className="me-2">Wyslij do sprawdzenia</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Projekt B</td>
                                        <td>Adam Pawlak, Andrzej Kwiatkowski</td>
                                        <td>15.03.2024</td>
                                        <td>29.05.2024</td>
                                        <td><Button variant="success" className="me-2">Wyslij do sprawdzenia</Button></td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="text-center mt-5">
                                <h3 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Nieaktywne Projekty</h3>
                            </div>
                            <Table striped bordered hover className="mt-4">
                                <thead>
                                    <tr>
                                        <th>Nazwa projektu</th>
                                        <th>Osoby odpowiedzialne</th>
                                        <th>Planowana data rozpoczecia</th>
                                        <th>Planowana data zakonczenia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-dark">
                                        <td>Projekt F</td>
                                        <td>Adam Pawlak, Kamil Zawadzki</td>
                                        <td>01.07.2024</td>
                                        <td>31.12.2024</td>
                                    </tr>
                                    <tr className="table-dark">
                                        <td>Projekt G</td>
                                        <td>Adam Pawlak</td>
                                        <td>01.10.2024</td>
                                        <td>31.03.2025</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="zadania" title={<span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'black' }}>Zadania</span>}>
                            <div className="text-center mb-4">
                                <h3 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Aktywne Zadania</h3>
                            </div>
                            <Table striped bordered hover className="mt-4">
                                <thead>
                                    <tr>
                                        <th>Nazwa zadania</th>
                                        <th>Osoba powierzajaca zadanie</th>
                                        <th>Data rozpoczecia</th>
                                        <th>Planowana data zakonczenia</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Zadanie 1</td>
                                        <td>Andrzej Kwiatkowski</td>
                                        <td>01.05.2024</td>
                                        <td>01.06.2024</td>
                                        <td><Button variant="success" className="me-2">Wyslij do sprawdzenia</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Zadanie 2</td>
                                        <td>Katarzyna Miodek</td>
                                        <td>10.04.2024</td>
                                        <td>10.05.2024</td>
                                        <td><Button variant="success" className="me-2">Wyslij do sprawdzenia</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
};