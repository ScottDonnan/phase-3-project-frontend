import { useEffect, useState } from "react";
import DeckCards from "./deckcards";

function DeckContainer({setSelectedDeck, selectedDeck, deckCardList, getDeckCards}) {
  
  const [deckList, setDeckList] = useState([])
  const [displayDeck, setDisplayDeck] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/decks")
    .then(res => res.json())
    .then(data => setDeckList(data))
  }, [])

  const handleClick = (e) => {
    if(e.target.value !== selectedDeck){
      setSelectedDeck(e.target.value)
    }
    
    setDisplayDeck((value) => value = !displayDeck)
    
    getDeckCards(e.target.value)
  }

  return (
      <div className = 'CardContainer'>
        <h1>Deck Container</h1>
        {deckList.map(deck => <button key={deck.id} value={deck.id} onClick={handleClick}>{deck.name}</button>)}
        {displayDeck === false ? null : <DeckCards deckCardList={deckCardList}/>}
      </div>
    );
  }
  
  export default DeckContainer;