import { useEffect, useState } from "react";
import DeckCards from "./deckcards";

function DeckContainer({setDisplayCards}) {
  
  const [deckList, setDeckList] = useState([])
  const [deckCardList, setDeckCardList] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/decks")
    .then(res => res.json())
    .then(data => setDeckList(data))
  }, [])

  const handleClick = (e) => {
    fetch(`http://localhost:9292/decks/${e.target.value}/allcards`)
    .then(res => res.json())
    .then(data => setDeckCardList(data))
  }

  return (
      <div className = 'CardContainer'>
        <h1>Deck Container</h1>
        {deckList.map(deck => <button key={deck.id} value={deck.id} onClick={handleClick}>{deck.name}</button>)}
        {deckCardList === false ? null : <DeckCards deckCardList={deckCardList}/>}
      </div>
    );
  }
  
  export default DeckContainer;