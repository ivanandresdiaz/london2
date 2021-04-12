import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/Global.scss';
import Opening from '../pages/Opening';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Store from '../pages/Store';
import StoreMen from '../pages/StoreMen';
import StoreMenBrandPants from '../pages/StoreMenBrandPants';
import StoreMenPantOxford from '../pages/StoreMenPantOxfort';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Opening} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/store' component={Store} />
        <Route exact path='/store/hombre' component={StoreMen} />
        <Route exact path='/store/hombre/brandPants' component={StoreMenBrandPants} />
        <Route exact path='/store/hombre/brandPants/oxford' component={StoreMenPantOxford} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
