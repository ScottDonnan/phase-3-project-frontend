import React from "react";
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'

function HeroCards({selectedDeck, getDeckCards}) {


    const [isLoaded, setIsLoaded] =useState(false);
    const [heroCards, setHeroCards] = useState([])
   
    const heroClass = useParams().heroClass
    
    useEffect(() => {
        fetch(`http://localhost:9292/heros/${heroClass}`)
        .then(res =>res.json())
        .then(data => {
            return setHeroCards(data), setIsLoaded(true)})
    },[heroClass])
    
    if (!isLoaded) return <h1>Loading...</h1> 

    function handleAddCardToDeck(heroId) {
        const cardObj = {
            deck_id: selectedDeck,
            card_id: heroId
        }
        console.log(cardObj)
        fetch("http://localhost:9292/card_decks", {
          method: "POST",
          headers: {Accept: "application/json",
                "Content-Type": "application/json"},
          body: JSON.stringify(cardObj)
        })
        .then(r => r.json())
        .then(data => console.log(data))
        getDeckCards(selectedDeck)
      }

    return (
        heroCards.map((hero) => <div className="HeroCards">   
             <img src={hero.img} alt={hero.name} />
        </div>)
    );
}

export default HeroCards;