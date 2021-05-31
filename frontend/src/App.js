import React from 'react';
import "./App.css";
import Header from './components/Header';
import Player from './components/Player';
import SongList from './components/SongList';
import Footer from './components/Footer';
import{Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
      <Header/>
      <Switch>
        <Route exact path ="/" component={SongList} />
        <Route exact path ="/songs/:id" component={Player} />
      </Switch>
     <Footer/>
    </div>
  )
}

export default App
