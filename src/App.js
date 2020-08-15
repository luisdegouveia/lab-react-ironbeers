import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AllBeers from './components/AllBeers/AllBeers';
import Beer from './components/Beer/Beer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';

function App() {
  return (
    <div className="App">

      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={AllBeers}/>

        <Route path='/beers/:beerId' render={(props) => <Beer {...props} /> } />
        <Route path='/randomBeer' render={(props) => <RandomBeer {...props} /> } />
        <Route path='/newBeer' render={(props) => <NewBeer {...props} /> } />
      </Switch>
    
    </div>
  );
}

export default App;
