import './App.css';
import Checkouta from './container/checkout/Checkout';
import Home from './container/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/checkout'>
            <Checkouta />
          </Route>
          <Route path='/products'>
            <Home />
          </Route>
          <Redirect from='/' to='/products' />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>{' '}
    </div>
  );
}

export default App;
