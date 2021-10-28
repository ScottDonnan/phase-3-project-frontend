import React from "react";
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'

function HeroCards({selectedDeck, getDeckCards, setSelectedHero}) {


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

    function handleAddCardToDeck(heroId) {
        const cardObj = {
            deck_id: selectedDeck,
            card_id: heroId
        }

        fetch("http://localhost:9292/card_decks", {
          method: "POST",
          headers: {Accept: "application/json",
                "Content-Type": "application/json"},
          body: JSON.stringify(cardObj)
        })
        .then(r => r.json())
        
        getDeckCards(selectedDeck)
      }

    return (
        heroCards.map((card) => <div className="HeroCards">   
             <img onClick={() => handleAddCardToDeck(card.id)} src={card.img} alt={card.name} />
        </div>)
    );
}

export default HeroCards;