import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/header';
import DeckContainer from './components/deck-container';
import CardContainer from './components/card-container';
import Sidebar from './components/sidebar';

function App() {
  
  const [displayCards, setDisplayCards] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:9292/cards")
    .then(res => res.json())
    .then(data => setDisplayCards(data))
  }, [])

  return (
    <div>
      <Header />
      <Sidebar />
      <DeckContainer setDisplayCards={setDisplayCards}/>
      <CardContainer displayCards={displayCards}/>
    </div>
  );
}

export default App;
