import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'layouts/header';
import Main from 'layouts/main';
import Footer from 'layouts/footer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.module.scss';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </Fragment>
  );
};

export default App;
