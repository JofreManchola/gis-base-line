import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import ExproreMap from '../pages/ExproreMap';
import Contact from '../pages/Contact';


import About from '../pages/About';
import NotFoundPage from '../pages/NotFoundPage';
import ComingSoon from '../pages/ComingSoon';


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" component={Init} exact={true} /> */}
      <Route path="/" component={ExproreMap} exact={true} />
      <Route path="/map" component={ExproreMap} />
      <Route path="/item-1" component={ComingSoon} />
      <Route path="/item-2" component={Contact} />
      <Route path="/about" component={About} />

      <Route path='/login' component={ComingSoon} />

      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;