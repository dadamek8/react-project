import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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

const eventsGrafik = [
    {
        id: 0,
        title: 'Praca',
        start: new Date(2024, 4, 1, 8, 0),
        end: new Date(2024, 4, 1, 16, 0),
    },
    {
        id: 1,
        title: 'Praca',
        start: new Date(2024, 4, 2, 8, 0),
        end: new Date(2024, 4, 2, 16, 0),
    },
    {
        id: 2,
        title: 'Praca',
        start: new Date(2024, 4, 3, 8, 0),
        end: new Date(2024, 4, 3, 16, 0),
    },
    {
        id: 3,
        title: 'Praca',
        start: new Date(2024, 4, 6, 8, 0),
        end: new Date(2024, 4, 6, 16, 0),
    }
];

export const GrafikPracownika = () => {
    return (
        <div className="margines">
            <Container fluid>
                <Row>
                 <Calendar
                 localizer={localizer}
                 events={eventsGrafik}
                 startAccessor="start"
                 endAccessor="end"
                 style={{ height: 500, margin: '50px' }}
                 className="custom-calendar"
                 messages={messages}
                 />
                </Row>
            </Container>
        </div>
    );
};
