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
<<<<<<< HEAD
  const [deckList, setDeckList] = useState([])
=======
  const [displayDeck, setDisplayDeck] = useState(false)
>>>>>>> 2ff86b4532be6b022043972e55248efc57013a44
  
  

  useEffect(()=>{
    fetch("http://localhost:9292/cards")
    .then(res => res.json())
    .then(data => setDisplayCards(data))

    fetch("http://localhost:9292/decks")
    .then(res => res.json())
    .then(data => setDeckList(data))
    
  }, [])

  console.log(deckList)

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
      <CardContainer setSelectedHero={setSelectedHero} getDeckCards={getDeckCards} displayCards={displayCards} selectedDeck={selectedDeck} />

<<<<<<< HEAD
      {createDeck=== true ? <Sidebar setDeckCardList={setDeckCardList} selectedHero={selectedHero} getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} setCreateDeck={setCreateDeck} deckList={deckList}/> : <CreateDeck selectedHero={selectedHero}/>}
=======
      {createDeck=== true ? <Sidebar setDisplayDeck={setDisplayDeck} displayDeck={displayDeck} setDeckCardList={setDeckCardList} selectedHero={selectedHero} getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} setCreateDeck={setCreateDeck}/> : <CreateDeck selectedHero={selectedHero}/>}
>>>>>>> 2ff86b4532be6b022043972e55248efc57013a44
    </div>
  );
}

export default App;
