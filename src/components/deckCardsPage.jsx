import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from "react"

function DeckCardsPage() {
    
    // const handleClick = (cardID) => deleteCardFromDeck(cardID)
    const [isLoaded, setIsLoaded] =useState(false);
    const [deckCards, setDeckCards] = useState([])
    const id = useParams().id

    useEffect(() => {
    fetch(`http://localhost:9292/decks/${id}/allcards`)
    .then(res => res.json())
    .then(data => setDeckCards(data), setIsLoaded(true))
    },[id])

    if (!isLoaded) return <h1>Loading...</h1>
    
    
    return(
        <div className="assignDeck">
            {deckCards.map(card =><img  src={card.img} alt={card.name}/>)}
        </div>
    )
}

export default DeckCardsPage
