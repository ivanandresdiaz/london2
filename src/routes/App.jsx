import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/Global.scss';
import Opening from '../components/Opening';
import NotFound from '../components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Opening} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
