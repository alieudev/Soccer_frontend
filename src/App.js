import './App.css';
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import PlayersList from './Components/PlayersList';

function App() {

  fetch("http://localhost:9292")
    .then((r) => r.json())
    .then((data) => console.log(data))

  return (
    <div>
      <Router>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path='/manage_team'>
              <PlayersList />
            </Route>
          </Switch>
      </Router>
    </div>
  );
  }

export default App;