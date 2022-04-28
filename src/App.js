import React from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Navbars from './Components/NavBars';
import Buttons from './Components/Buttons';
import Typography from './Components/Typography';
import Tables from './Components/Tables';
import Forms from './Components/Forms';
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
      <Cards />
    </>
  );
}

export default App;
