
function DeckCards({deckCardList, deleteCardFromDeck}) {
    
    const handleClick = (cardID) => deleteCardFromDeck(cardID)
    
    const listOfCards = deckCardList.map(card => {
        return (
            <li onClick={() => handleClick(card.id)}>
                {card.name}
                <img src={card.img} alt={card.name} />
            </li>)
    })

    return(
        <div className="deck-cards">
            {listOfCards}
        </div>
    )
}

export default DeckCards