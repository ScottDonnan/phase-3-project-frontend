
function DeckCards({deckCardList, deleteCardFromDeck, selectedDeckName}) {
    
    // const handleClick = (cardID) => deleteCardFromDeck(cardID)
    
    const listOfCards = deckCardList.map(card => {
        return (
            <li onClick={() => deleteCardFromDeck(card.id)} key={card.id}>
                {card.name}
                <img src={card.img} alt={card.name} />
            </li>)
    })
    
    return(
        <div className="deck-cards">
            <h2>{selectedDeckName}</h2>
            {listOfCards}
        </div>
    )
}

export default DeckCards