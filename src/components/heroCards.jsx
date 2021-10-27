import React from "react";
import {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'

function HeroCards() {

   /* const id = useParams().id
    
    useEffect(() => {
        fetch(`http://localhost:9292/cards/${id}`)
        .then(res =>res.json())
        .then(data => {
            return setEachCards(data), setIsLoaded(true)})
    },[id])
    
    if (!isLoaded) return <h1>Loading...</h1> */

    return (
        <div>
            <h1>Hero Class Cards</h1>
        </div>
    );
}

export default HeroCards;