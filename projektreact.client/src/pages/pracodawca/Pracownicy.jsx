import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export const Pracownicy = () => {
    return (
        <div className="margines">
        <Container fluid>
            <Row>
                <Tabs
                    defaultActiveKey="danePodstawowe"
                    id="danePracownika"
                    className="mb-3">
                        <Tab eventKey="danePodstawowe" title={<span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'black' }}>Dane podstawowe</span>}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Filtry</Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Filtruj po nazwisku</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Filtruj po stanowisku</Form.Label>
                                                    <Form.Select>
                                                        <option>Wybierz</option>
                                                        <option value="1">Prezes firmy</option>
                                                        <option value="2">Wiceprezes firmy</option>
                                                        <option value="3">Programista C#</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Imie</th>
                                    <th>Nazwisko</th>
                                    <th>Stanowisko</th>
                                    <th>Aktualne projekty</th>
                                    <th>Wynagrodzenie netto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Adam</td>
                                    <td>Pawlak</td>
                                    <td>Prezes firmy</td>
                                    <td>Brak</td>
                                    <td>25,000 PLN</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Katarzyna</td>
                                    <td>Miodek</td>
                                    <td>Wiceprezes firmy</td>
                                    <td>Brak</td>
                                    <td>17,500 PLN</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Andrzej</td>
                                    <td>Kwiatkowski</td>
                                    <td>Programista C#</td>
                                    <td>Zwiekszenie bezpieczenstwa aplikacji firmowych</td>
                                    <td>11,500 PLN</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Teresa</td>
                                    <td>Mucha</td>
                                    <td>Programista C#</td>
                                    <td>Zwiekszenie bezpieczenstwa aplikacji firmowych</td>
                                    <td>10,000 PLN</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Kamil</td>
                                    <td>Zawadzki</td>
                                    <td>Programista C#</td>
                                    <td>Dodawanie nowych funkcji aplikacji firmowych</td>
                                    <td>8,300 PLN</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                        <Tab eventKey="daneKontaktowe" title={<span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'black' }}>Dane kontaktowe</span>}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Filtry</Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Filtruj po nazwisku</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Filtruj po miejscowosci</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Imie</th>
                                    <th>Nazwisko</th>
                                    <th>Miejscowosc</th>
                                    <th>Ulica</th>
                                    <th>Nr domu</th>
                                    <th>Nr lokalu</th>
                                    <th>Kod pocztowy</th>
                                    <th>Poczta</th>
                                    <th>Kraj</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Adam</td>
                                    <td>Pawlak</td>
                                    <td>Poznan</td>
                                    <td>Wesola</td>
                                    <td>48</td>
                                    <td>3</td>
                                    <td>60-102</td>
                                    <td>Poznan</td>
                                    <td>Polska</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Katarzyna</td>
                                    <td>Miodek</td>
                                    <td>Warszawa</td>
                                    <td>Wielka</td>
                                    <td>23</td>
                                    <td>-</td>
                                    <td>00-016</td>
                                    <td>Warszawa</td>
                                    <td>Polska</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Andrzej</td>
                                    <td>Kwiatkowski</td>
                                    <td>Poznan</td>
                                    <td>Smutna</td>
                                    <td>12</td>
                                    <td>5</td>
                                    <td>60-113</td>
                                    <td>Poznan</td>
                                    <td>Polska</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Teresa</td>
                                    <td>Mucha</td>
                                    <td>Szczecin</td>
                                    <td>Zielona</td>
                                    <td>17</td>
                                    <td>9</td>
                                    <td>70-020</td>
                                    <td>Szczecin</td>
                                    <td>Polska</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Kamil</td>
                                    <td>Zawadzki</td>
                                    <td>Warszawa</td>
                                    <td>Malutka</td>
                                    <td>55</td>
                                    <td>4</td>
                                    <td>00-025</td>
                                    <td>Warszawa</td>
                                    <td>Polska</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                        <Tab eventKey="dodajPracownika" title={<span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'black' }}>Dodaj pracownika</span>}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="imie" label="Imie" className="mb-3">
                                        <Form.Control type="text" placeholder="Imie" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="nazwisko" label="Nazwisko" className="mb-3">
                                        <Form.Control type="text" placeholder="Nazwisko" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="stanowisko" label="Stanowisko" className="mb-3">
                                        <Form.Control type="text" placeholder="Stanowisko" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <FloatingLabel controlId="wynagrodzenieNetto" label="Wynagrodzenie Netto" className="mb-3">
                                        <Form.Control type="number" placeholder="Wynagrodzenie Netto" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel controlId="miejscowosc" label="Miejscowosc" className="mb-3">
                                    <Form.Control type="text" placeholder="Miejscowosc" />
                                </FloatingLabel>
                                </Form.Group>
                                </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel controlId="ulica" label="Ulica" className="mb-3">
                                    <Form.Control type="text" placeholder="Ulica" />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel controlId="nrDomu" label="Nr domu" className="mb-3">
                                    <Form.Control type="number" placeholder="Nr domu" />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel controlId="nrLokalu" label="Nr lokalu" className="mb-3">
                                    <Form.Control type="number" placeholder="Nr lokalu" />
                                </FloatingLabel>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel controlId="kodPocztowy" label="Kod pocztowy" className="mb-3">
                                    <Form.Control type="text" placeholder="Kod pocztowy" />
                                </FloatingLabel>
                                </Form.Group>
                            </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel controlId="poczta" label="Poczta" className="mb-3">
                                    <Form.Control type="text" placeholder="Poczta" />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel controlId="kraj" label="Kraj" className="mb-3">
                                    <Form.Control type="text" placeholder="Kraj" />
                                </FloatingLabel>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Container className="d-flex justify-content-center">
                            <Stack gap={2} className="col-md-5 mx-auto">
                        <Button variant="success" type="submit">
                            Potwierdz
                            </Button>
                                <Button variant="secondary">Resetuj</Button>
                            </Stack>
                        </Container>
                    </Tab>
                </Tabs>
            </Row>
            
            </Container>
        </div>


    )
}