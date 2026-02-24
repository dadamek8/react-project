import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const messages = {
    date: 'Data',
    time: 'Czas',
    event: 'Wydarzenie',
    allDay: 'Caly dzien',
    week: 'Tydzien',
    work_week: 'Tydzien pracy',
    day: 'Dzien',
    month: 'Miesiac',
    previous: 'Poprzedni',
    next: 'Nastepny',
    yesterday: 'Wczoraj',
    tomorrow: 'Jutro',
    today: 'Dzisiaj',
    agenda: 'Agenda',
    noEventsInRange: 'Brak wydarzen w tym okresie.',
    showMore: total => `+ Zobacz wiecej (${total})`
};

const eventsPrzelozony = [
    {
        id: 0,
        title: 'Spotkanie zarzadu',
        start: new Date(2024, 4, 1, 10, 0),
        end: new Date(2024, 4, 1, 12, 0),
    },
    {
        id: 1,
        title: 'Prezentacja projektu',
        start: new Date(2024, 4, 9, 14, 0),
        end: new Date(2024, 4, 9, 15, 0),
    },
    {
        id: 2,
        title: 'Spotkanie z klientem',
        start: new Date(2024, 4, 22, 7, 0),
        end: new Date(2024, 4, 22, 8, 0),
    },
    {
        id: 3,
        title: 'Urodziny szefa!',
        start: new Date(2024, 4, 25, 1, 0),
        end: new Date(2024, 4, 25, 23, 0),
    }
];

const eventsPracownicy = [
    {
        id: 4,
        title: 'Adam Pawlak - Praca',
        start: new Date(2024, 4, 1, 9, 0),
        end: new Date(2024, 4, 1, 17, 0)
    },
    {
        id: 5,
        title: 'Katarzyna Miodek - Praca',
        start: new Date(2024, 4, 1, 10, 0),
        end: new Date(2024, 4, 1, 18, 0)
    },
    {
        id: 6,
        title: 'Andrzej Kwiatkowski - Praca',
        start: new Date(2024, 4, 1, 8, 0),
        end: new Date(2024, 4, 1, 16, 0)
    },
    {
        id: 7,
        title: 'Teresa Mucha - Praca',
        start: new Date(2024, 4, 1, 8, 0),
        end: new Date(2024, 4, 1, 16, 0)
    },
    {
        id: 7,
        title: 'Kamil Zawadzki - Praca',
        start: new Date(2024, 4, 1, 8, 0),
        end: new Date(2024, 4, 1, 16, 0)
    }
];

export const Grafik = () => {
    return (
        <div className="margines">
            <Container fluid>
                <Row>
                    <Tabs defaultActiveKey="twojGrafik" id="grafikTabs" className="mb-3">
                        <Tab eventKey="twojGrafik" title={<span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'black' }}>Twoj grafik</span>}>
                            <Calendar
                                localizer={localizer}
                                events={eventsPrzelozony}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 500, margin: '50px' }}
                                className="custom-calendar"
                                messages={messages}
                            />
                            <Container className="d-flex justify-content-center mt-4">
                                <Stack gap={2} className="col-md-5 mx-auto">
                                    <Button variant="primary" type="button">Dodaj spotkanie</Button>
                                    <Button variant="danger" type="button">Usun spotkanie</Button>
                                </Stack>
                            </Container>
                        </Tab>
                        <Tab eventKey="grafikPracownikow" title={<span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'black' }}>Grafik pracownikow</span>}>
                            <Calendar
                                localizer={localizer}
                                events={eventsPracownicy}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 500, margin: '50px' }}
                                className="custom-calendar"
                                messages={messages}
                            />
                            <Container className="d-flex justify-content-center mt-4">
                                <Stack gap={2} className="col-md-5 mx-auto">
                                    <Button variant="primary" type="button">Dodaj godziny pracy</Button>
                                    <Button variant="danger" type="button">Usun godziny pracy</Button>
                                </Stack>
                            </Container>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
};
