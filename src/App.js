import './App.css';
import React, { useState, useEffect } from 'react'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import PlayersList from './Components/PlayersList'
import EditPlayer from './Components/EditPlayer'
import AddPlayer from './Components/AddPlayer';

function App() {

const [playerList, setPlayerList] = useState([])

  
    useEffect(() => {
      fetch(`http://localhost:9292/players`)
      .then(r => r.json())
      .then(setPlayerList)
  }, [])

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
              <PlayersList playerList={playerList} setPlayerList={setPlayerList} />
            </Route>
            <Route exact path='/manage_team/add_player'>
              <AddPlayer />
            </Route>
            <Route
              exact
              path="/manage_team/:id/edit"
              render={({ match }) => (
                <EditPlayer
                players={playerList}
                player={playerList.find((player) => player.id === parseInt(match.params.id))}
                setPlayerList={setPlayerList}
                />
              )}
            />
          </Switch>
      </Router>
    </div>
  );
  }

export default App;