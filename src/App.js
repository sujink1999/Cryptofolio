
import BottomNav from './components/BottomNav/BottomNav'

import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';

import TopCoins from './containers/TopCoins/TopCoins';
import UserHoldings from './containers/UserHoldings/UserHoldings';


function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/list" component={TopCoins} />
          <Route exact path="/" component={UserHoldings} />
        </Switch>
        <BottomNav/>
      </Router>
      
    </div>
  );
}

export default App;
