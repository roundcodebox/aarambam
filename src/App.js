import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CheatSheet from './Pages/CheatSheet';
import ErrorPage from './Pages/ErrorPage';
import AllNavBar from './Pages/Layouts/AllNavBar';
import Footer from './Pages/Layouts/Footer';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Shadows from './Components/Shadows';
import Navbars from './Components/NavBars';
import Buttons from './Components/Buttons';
import Dropdowns from './Components/Dropdowns';
import Typography from './Components/Typography';
import Tables from './Components/Tables';
import Forms from './Components/Forms';
import Alerts from './Components/Alerts';
import AccordionExample from './Components/AccordionExample';
import Badges from './Components/Badges';
import Breadcrumbs from './Components/Breadcrumbs';
import ListGroups from './Components/ListGroups';
import Spinners from './Components/Spinners';
import ProgressBars from './Components/ProgressBars';
import ModalExamples from './Components/ModalExamples';
import CarouselsExamples from './Components/CarouselsExamples';
import Navs from './Components/Navs';
import Paginations from './Components/Paginations';
import Toasts from './Components/Toasts';
import Stacks from './Components/Stacks';
import Borders from './Components/Borders';
import Jumbotron from './Components/Jumbotron';
import Heros from './Components/Heros';
import Footers from './Components/Footers';
import Features from './Components/Features';
import Grid from './Components/Grid';

function App() {
  return (
    <Router>
      <AllNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cheatSheet" element={<CheatSheet />} />
        <Route path="/header" element={<Header />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/shadows" element={<Shadows />} />
        <Route path="/navbars" element={<Navbars />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/dropdowns" element={<Dropdowns />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/accordionexample" element={<AccordionExample />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/breadcrumbs" element={<Breadcrumbs />} />
        <Route path="/listgroups" element={<ListGroups />} />
        <Route path="/spinners" element={<Spinners />} />
        <Route path="/listgroups" element={<ListGroups />} />
        <Route path="/progressbars" element={<ProgressBars />} />
        <Route path="/modalexamples" element={<ModalExamples />} />
        <Route path="/carouselsexamples" element={<CarouselsExamples />} />
        <Route path="/paginations" element={<Paginations />} />
        <Route path="/navs" element={<Navs />} />
        <Route path="/toasts" element={<Toasts />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/borders" element={<Borders />} />
        <Route path="/jumbotron" element={<Jumbotron />} />
        <Route path="/footers" element={<Footers />} />
        <Route path="/heros" element={<Heros />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/features" element={<Features />} />
        <Route path="/alerts" element={<Alerts />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
