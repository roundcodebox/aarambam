import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CheatSheet from './Pages/CheatSheet';
import ErrorPage from './Pages/ErrorPage';
import ProfileEdit from './Pages/ProfileEdit/ProfileEdit';
import ProfileBilling from './Pages/ProfileBilling/ProfileBilling';
import ProfileSecurity from './Pages/ProfileSecurity/ProfileSecurity';
import ProfileNotifications from './Pages/ProfileNotifications/ProfileNotifications';
import TimeTable from './Pages/TimeTable/TimeTable';
// import ProfileSettings from './Pages/ProfileSettings/ProfileSettings';
import ForgotPassword from './Pages/ForgotPassword';
// import AllNavBar from './Pages/Layouts/AllNavBar';
import Footer from './Pages/Layouts/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardNavNew from './Components/Dashboard/DashboardNavNew';
import DashboardTemplate from './Pages/Layouts/DashboardTemplate';
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
import ContactInfo from './Components/ContactInfo/ContactInfo';
import AuthorsCard from './Components/AuthorsCard/AuthorsCard';
import ContactCards from './Components/ContactCards/ContactCards';
import ProductTracking from './Components/ProductTracking/ProductTracking';

function App() {
  return (
    <Router>
      {/* <AllNavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cheatSheet" element={<CheatSheet />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
        <Route path="/profilebilling" element={<ProfileBilling />} />
        <Route path="/profilesecurity" element={<ProfileSecurity />} />
        <Route
          path="/profilenotifications"
          element={<ProfileNotifications />}
        />
        <Route path="/timetable" element={<TimeTable />} />
        {/* <Route path="/profilesettings" element={<ProfileSettings />} /> */}
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
        <Route path="/dashboardnavnew" element={<DashboardNavNew />} />
        <Route path="/dashboardtemplate" element={<DashboardTemplate />} />
        <Route path="/horizontallines" element={<HorizontalLines />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
        <Route path="/authorscard" element={<AuthorsCard />} />
        <Route path="/contactcards" element={<ContactCards />} />
        <Route path="/producttracking" element={<ProductTracking />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
