import './App.css';
import {useEffect, useState} from 'react'
import CardContainer from './components/card-container';
import Sidebar from './components/sidebar';
import NavBar from './components/NavBar';
import CreateDeck from './components/create-deck';


function App() {
  
  const [displayCards, setDisplayCards] = useState([])
  const [selectedDeck, setSelectedDeck] = useState()
  const [deckCardList, setDeckCardList] = useState([])
  const [selectedHero, setSelectedHero] = useState()
  const [createDeck, setCreateDeck] = useState(true)
  const [displayDeck, setDisplayDeck] = useState(false)
  
  

  useEffect(()=>{
    fetch("http://localhost:9292/cards")
    .then(res => res.json())
    .then(data => setDisplayCards(data))

    
  }, [])

  const getDeckCards = (id) => {
    // console.log("test")
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
      <NavBar setDisplayDeck={setDisplayDeck} setCreateDeck={setCreateDeck}/>
      {/* <DeckContainer getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} /> */}
      <CardContainer deckCardList={deckCardList} setSelectedHero={setSelectedHero} getDeckCards={getDeckCards} displayCards={displayCards} selectedDeck={selectedDeck} />

      {createDeck=== true ? <Sidebar setDisplayDeck={setDisplayDeck} displayDeck={displayDeck} setDeckCardList={setDeckCardList} selectedHero={selectedHero} getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} setCreateDeck={setCreateDeck}/> : <CreateDeck selectedHero={selectedHero}/>}
    </div>
  );
}

export default App;
