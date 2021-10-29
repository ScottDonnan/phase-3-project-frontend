import React from "react";
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'

function HeroCards({deckCardList, selectedDeck, getDeckCards, setSelectedHero}) {


    const [isLoaded, setIsLoaded] =useState(false);
    const [heroCards, setHeroCards] = useState([])
   
    const heroClass = useParams().heroClass
    
    useEffect(() => {
        fetch(`http://localhost:9292/heros/${heroClass}`)
        .then(res =>res.json())
        .then(data => {
            setHeroCards(data)
            setIsLoaded(true)
            setSelectedHero(data[0].hero_id)})
    },[heroClass])
    
    if (!isLoaded) return <h1>Loading...</h1> 

    function handleAddCardToDeck(cardId) {
        const cardObj = {
            deck_id: selectedDeck,
            card_id: cardId
        }

        if (deckCardList.map(card => card.id).includes(cardId)) {
            alert("only one copy allowed")
        } else if (deckCardList.length >= 5) {
            alert("no more cards allowed")
        } else {
            fetch("http://localhost:9292/card_decks", {
            method: "POST",
            headers: {Accept: "application/json",
                    "Content-Type": "application/json"},
            body: JSON.stringify(cardObj)
            })
            .then(r => r.json())
            
            getDeckCards(selectedDeck)
        }
    }   
    

    return (
        heroCards.map((card) => <div className="HeroCards">   
             <img onClick={() => handleAddCardToDeck(card.id)} src={card.img} alt={card.name} />
        </div>)
    );
}

export default HeroCards;