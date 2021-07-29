import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import React from 'react';
import Home from './components/Home'
import FoodItem from './components/FoodItem'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Switch>
            <Route exact path='/ourmenu' render={() => <div><h1>Our Menu</h1><Link to="/">HOME</Link></div>} />
            <Route exact path='/services' render={() => <div><h1>Services</h1><Link to="/">HOME</Link></div>} />
            <Route exact path='/about' render={() => <div><h1>About</h1><Link to="/">HOME</Link></div>} />
            <Route exact path='/delivery' render={() => <div><h1>Delivery</h1><Link to="/">HOME</Link></div>} />
            <Route exact path='/reservation' render={() => <div><h1>Reservation</h1><Link to="/">HOME</Link></div>} />
            <Route expct path='/home/:id' component={FoodItem} />
      </Switch>
    </div>  
  );
}

export default App;
