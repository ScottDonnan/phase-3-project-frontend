
function DeckCards({deckCardList, deleteCardFromDeck, selectedDeckName}) {
    
    // const handleClick = (cardID) => deleteCardFromDeck(cardID)
    
    const listOfCards = deckCardList.map(card => {
        return (
            <li onClick={() => deleteCardFromDeck(card.id)} key={card.id}>
                {card.name}
                <br/>
                <img src={card.img} alt={card.name} />
            </li>)
    })
    
    return(
        <div className="deck-cards">
            <h3>{selectedDeckName}</h3>
            {listOfCards}
        </div>
    )
}

export default DeckCards