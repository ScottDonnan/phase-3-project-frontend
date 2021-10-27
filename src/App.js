import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/header';
import DeckContainer from './components/deck-container';
import CardContainer from './components/card-container';
import Sidebar from './components/sidebar';

function App() {
  
  const [displayCards, setDisplayCards] = useState([])
  const [selectedDeck, setSelectedDeck] = useState()
  
  

  useEffect(()=>{
    fetch("http://localhost:9292/cards")
    .then(res => res.json())
    .then(data => setDisplayCards(data))

    
  }, [])


  return (
    <div>
      <Header />
      <Sidebar  displayCards={displayCards}/>
      <DeckContainer setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} />
      <CardContainer displayCards={displayCards} selectedDeck={selectedDeck}/>
    </div>
  );
}

export default App;
