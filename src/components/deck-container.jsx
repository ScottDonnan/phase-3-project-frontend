import { useEffect, useState } from "react";
import DeckCards from "./deckcards";

function DeckContainer({setSelectedDeck, selectedDeck, deckCardList, getDeckCards, selectedHero, setCreateDeck, setDeckCardList, displayDeck, setDisplayDeck}) {
  
  const [deckList, setDeckList] = useState([])
  
  let selectedDeckName = "Add 5 Cards"
                          console.log(selectedDeckName)

  useEffect(() => {
    fetch("http://localhost:9292/decks")
    .then(res => res.json())
    .then(data => setDeckList(data))
  }, [])

  const handleClick = (deckName, deckId) => {
    selectedDeckName = deckName
                          console.log(selectedDeckName)
    if(deckId !== selectedDeck){
      setSelectedDeck(deckId)
    }
    setDisplayDeck((value) => value = true)
    getDeckCards(deckId)
  }

  const deleteCardFromDeck = (cardId) => {
    console.log("cardID", cardId)
    fetch(`http://localhost:9292/decks/${selectedDeck}/${cardId}`, {method: "DELETE"})
    .then(r => r.json())
    deleteDeckCard(cardId)
  }

  function deleteDeckCard(deletedCardId) {
    const newDeck = deckCardList.filter(card => card.id !== deletedCardId)
    setDeckCardList(newDeck)
  }

  const handleDeleteDeck = (deckId) => {
    console.log('handleDelete', deckId)
    fetch(`http://localhost:9292/decks/${deckId}`, {method: 'DELETE'})
    updateDisplayedDecks(deckId)
  }

  const updateDisplayedDecks = (deckId) => {
    const newDeckList = deckList.filter(deck => deckId !== deck.id)
    console.log(newDeckList)
    setDeckList(newDeckList)
    setDisplayDeck(false)
  }
  
  const heroSpecificDecks = deckList.filter(deck => deck.hero_id === selectedHero)

  const deckAndDeleteButton = heroSpecificDecks.map((deck) => {
    return(
      <div>
        <button className="deck-button" key={deck.id} onClick={() => handleClick(deck.name, deck.id)}>{deck.name}</button>
        <button className="delete-button" onClick={() => handleDeleteDeck(deck.id)}>X</button>
      </div>
    )}
  )

  
  return (
      <div className="deck-container">
        <button onClick={()=> !setCreateDeck(false)}>Create New Deck</button>
        <h2>Select A Deck</h2>
        {deckAndDeleteButton}
        <br />
        {displayDeck === false ? null : <DeckCards selectedDeckName={selectedDeckName} deleteCardFromDeck={deleteCardFromDeck} deckCardList={deckCardList}/>}
        
      </div>
    );
  }
  
  export default DeckContainer;