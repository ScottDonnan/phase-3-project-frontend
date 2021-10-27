
function DeckCards({deckCardList}) {
    console.log(deckCardList)

    // const handleClick = (e) => {
    //     // delete the card-deck instance for card_id and deck_id matching what was clicked
    //     fetch(`http://localhost:9292`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }
    
    const listOfCards = deckCardList.map(card => {
        return (
            <li>
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