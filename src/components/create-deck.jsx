import React from "react"
import {useEffect, useState} from 'react'

function CreateDeck({selectedHero}) {

    const [name, setName] = useState("")

    function handleSubmit (){   
        
        const cardObj = {
            name: name,
            hero_id: selectedHero
        }

        fetch("http://localhost:9292/decks", {
            method: "POST",
            headers: {Accept: "application/json",
                  "Content-Type": "application/json"},
            body: JSON.stringify(cardObj)
          })
          .then(r => r.json())
          .then(data => console.log(data))}

    return(
        <div className = "SideBar">
            <h2>Create A Deck</h2>
        <form onSubmit={handleSubmit}>
        <input onChange= {(e) => setName(e.target.value)}
        value = {name}
        type='text' name='name'
        placeholder='Enter Deck Name'/>
        <input type='submit'/>
    </form>
        </div>
    )
}

export default CreateDeck
