import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CheatSheet from './Pages/CheatSheet';
import ErrorPage from './Pages/ErrorPage';
import Profile from './Pages/Profile';
// import AllNavBar from './Pages/Layouts/AllNavBar';
import Footer from './Pages/Layouts/Footer';
import ForgotPassword from './Pages/ForgotPassword';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Shadows from './Components/Shadows/Shadows';
import Navbars from './Components/NavBars/NavBars';
import Buttons from './Components/Buttons/Buttons';
import Dropdowns from './Components/Dropdowns/Dropdowns';
import Typography from './Components/Typography/Typography';
import Tables from './Components/Tables/Tables';
import Forms from './Components/Forms/Forms';
import Alerts from './Components/Alerts/Alerts';
import AccordionExample from './Components/AccordionExample/AccordionExample';
import Badges from './Components/Badges/Badges';
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs';
import ListGroups from './Components/ListGroups/ListGroups';
import Spinners from './Components/Spinners/Spinners';
import ProgressBars from './Components/ProgressBars/ProgressBars';
import ModalExamples from './Components/ModalExamples/ModalExamples';
import CarouselsExamples from './Components/CarouselsExamples/CarouselsExamples';
import Navs from './Components/Navs/Navs';
import Paginations from './Components/Paginations/Paginations';
import Stacks from './Components/Stacks/Stacks';
import Borders from './Components/Borders/Borders';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Heros from './Components/Heros/Heros';
import Footers from './Components/Footers/Footers';
import Features from './Components/Features/Features';
import Grids from './Components/Grids/Grids';
import Tooltips from './Components/Tooltips/Tooltips';
import Sidebar from './Pages/Layouts/Sidebar';
import HorizontalLines from './Components/HorizontalLines/HorizontalLines';

function App() {
  return (
    <Router>
      {/* <AllNavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cheatSheet" element={<CheatSheet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/header" element={<Header />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/shadows" element={<Shadows />} />
        <Route path="/borders" element={<Borders />} />
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
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/jumbotron" element={<Jumbotron />} />
        <Route path="/footers" element={<Footers />} />
        <Route path="/heros" element={<Heros />} />
        <Route path="/grids" element={<Grids />} />
        <Route path="/features" element={<Features />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/tooltips" element={<Tooltips />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/horizontallines" element={<HorizontalLines />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
