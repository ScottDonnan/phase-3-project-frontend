import React from "react";
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'

function HeroCards() {


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

    return (
        <div>
            {heroCards.map((hero) => <img src={hero.img} alt={hero.name} />)}
        </div>
    );
}

export default HeroCards;