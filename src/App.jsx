import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Informations from './components/Informations/Informations';
import './app.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/informations" component={Informations} />
      </Switch>
    </>
  );
}

export default App;
