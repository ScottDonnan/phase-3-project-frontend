import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/header';
import DeckContainer from './components/deck-container';
import CardContainer from './components/card-container';
import Sidebar from './components/sidebar';

function App() {
  
  const [displayCards, setDisplayCards] = useState([])
  const [selectedDeck, setSelectedDeck] = useState()
  const [deckCardList, setDeckCardList] = useState([])
  
  

  useEffect(()=>{
    fetch("http://localhost:9292/cards")
    .then(res => res.json())
    .then(data => setDisplayCards(data))

    
  }, [])

  const getDeckCards = (id) => {
    fetch(`http://localhost:9292/decks/${id}/allcards`)
    .then(res => res.json())
    .then(data => setDeckCardList(data))
  }

  return (
    <div>
      <Header />
      <Sidebar />
      <DeckContainer getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} />
      <CardContainer getDeckCards={getDeckCards} displayCards={displayCards} selectedDeck={selectedDeck}/>
    </div>
  );
}

export default App;
