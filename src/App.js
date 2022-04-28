import React from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Navbars from './Components/NavBars';
import Buttons from './Components/Buttons';
import Typography from './Components/Typography';
import Tables from './Components/Tables';
import Forms from './Components/Forms';
import Alerts from './Components/Alerts';
import AccordionExample from './Components/AccordionExample';
import Badges from './Components/Badges';
import Breadcrumbs from './Components/Breadcrumbs';
import ListGroups from './Components/ListGroups';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Navbars />
      <Buttons />
      <Typography />
      <Tables />
      <Forms />
      <Alerts />
      <AccordionExample />
      <Badges />
      <Breadcrumbs />
      <ListGroups />
      <Cards />
    </>
  );
}

export default App;
