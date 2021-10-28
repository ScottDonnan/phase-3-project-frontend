import './App.css';
import {useEffect, useState} from 'react'
import CardContainer from './components/card-container';
import Sidebar from './components/sidebar';
import NavBar from './components/NavBar';
import Logo from './components/logo';

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

  // const sideBarSwitcher = "show decks"

  // function getComponent() {
  //   switch(sideBarSwitcher) {
  //     case 'decks':
  //       return <CreateDeck />       
  //     case 'show decks':
  //       return <DeckContainer getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} />      
  //     default:
  //       return <Sidebar />
  //   }
  // }

  return (
    <div>
      <NavBar />
      {/* <DeckContainer getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} /> */}
      <CardContainer getDeckCards={getDeckCards} displayCards={displayCards} selectedDeck={selectedDeck} />     
      <Sidebar getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} />
    </div>
  );
}

export default App;
