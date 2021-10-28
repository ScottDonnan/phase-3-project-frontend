import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import DeckContainer from "./deck-container";
import {Route} from 'react-router-dom'

function Sidebar({getDeckCards, deckCardList, setDisplayCards, setSelectedDeck, selectedDeck, selectedHero}) {

  const [heroClass, setheroClass] = useState([])

  
  useEffect(()=>{
    fetch("http://localhost:9292/heros")
    .then(res => res.json())
    .then(data => setheroClass(data))
  }, [])

    return (
      <div className = "SideBar">

        <Link exact to="/">
          <h2>All</h2>
        </Link>

        {heroClass.map((hero) =>
          <Link exact to={`/heroClass/${hero.name}`} key={hero.id}>
              <h2>{hero.name}</h2>
          </Link>)
        }
        <Route exact path="/heroClass/:heroClass">
          <DeckContainer selectedHero={selectedHero} getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck}/>
        </Route>
      </div>
    );
  }
  
  export default Sidebar;