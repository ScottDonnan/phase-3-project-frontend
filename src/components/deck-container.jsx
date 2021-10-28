import { useEffect, useState } from "react";
import DeckCards from "./deckcards";

function DeckContainer({setSelectedDeck, selectedDeck, deckCardList, getDeckCards, selectedHero}) {
  
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

  const deleteCardFromDeck = (cardId) => {
    console.log("cardID", cardId)
    fetch(`http://localhost:9292/decks/${selectedDeck}/${cardId}`, {method: "DELETE"})
    .then(console.log("Card Deleted"))
    .then(getDeckCards(selectedDeck))
  }

  const heroSpecificDecks = deckList.filter(deck => deck.hero_id === selectedHero)

  
  return (
      <div>
        <h1>Deck Container</h1>
        <button>Create New Deck</button>
        {heroSpecificDecks.map(deck => <button key={deck.id} value={deck.id} onClick={handleClick}>{deck.name}</button>)}
        {displayDeck === false ? null : <DeckCards deleteCardFromDeck={deleteCardFromDeck} deckCardList={deckCardList}/>}
      </div>
    );
  }
  
  export default DeckContainer;