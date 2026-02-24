import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Pracownicy } from './pages/pracodawca/Pracownicy.jsx';
import { Layout } from './pages/layout/Layout.jsx';
import { Grafik } from './pages/pracodawca/Grafik.jsx';
import { ProjektyZadania } from './pages/pracodawca/ProjektyZadania.jsx';
import { Wnioski } from './pages/pracodawca/Wnioski.jsx';
import { Komunikaty } from './pages/pracodawca/Komunikaty.jsx';
import { RejestracjaCzasuPracy } from './pages/pracownik/RejestracjaCzasuPracy.jsx';
import { GrafikPracownika } from './pages/pracownik/GrafikPracownika.jsx';
import { KomunikatyPracownika } from './pages/pracownik/KomunikatyPracownika.jsx';
import { ProjektyZadaniaPracownika } from './pages/pracownik/ProjektyZadaniaPracownika.jsx';
import { WnioskiPracownika } from './pages/pracownik/WnioskiPracownika.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/grafik' element={<Layout />}>
                    <Route index element={<Grafik />} />
                </Route>
                <Route path='/projekty-i-zadania' element={<Layout />}>
                    <Route index element={<ProjektyZadania />} />
                </Route>
                <Route path='/wnioski' element={<Layout />}>
                    <Route index element={<Wnioski />} />
                </Route>
                <Route path='/komunikaty' element={<Layout />}>
                    <Route index element={<Komunikaty />} />
                </Route>
                <Route path='/rejestracja-czasu-pracy' element={<Layout />}>
                    <Route index element={<RejestracjaCzasuPracy />} />
                </Route>
                <Route path='/grafik-pracownika' element={<Layout />}>
                    <Route index element={<GrafikPracownika />} />
                </Route>
                <Route path='/komunikaty-pracownika' element={<Layout />}>
                    <Route index element={<KomunikatyPracownika />} />
                </Route>
                <Route path='/projekty-i-zadania-pracownika' element={<Layout />}>
                    <Route index element={<ProjektyZadaniaPracownika />} />
                </Route>
                <Route path='/wnioski-pracownika' element={<Layout />}>
                    <Route index element={<WnioskiPracownika />} />
                </Route>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>
)

