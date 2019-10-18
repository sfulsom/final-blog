import React, {Fragment} from 'react';
import { Switch, Route, } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blogs from './components/blogs/Blogs';

const App = () => (
  <Fragment>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/blogs" component={Blogs} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
  </Fragment>
)

export default App;
