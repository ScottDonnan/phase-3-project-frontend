import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import DeckContainer from "./deck-container";
import {Route} from 'react-router-dom'

function Sidebar({getDeckCards, deckCardList, setDisplayCards, setSelectedDeck, selectedDeck, selectedHero}) {

 

    return (
      <div className = "SideBar">


//         <Link exact to="/">
//           <h2>All</h2>
//         </Link>

//         {heroClass.map((hero) =>
//           <Link exact to={`/heroClass/${hero.name}`} key={hero.id}>
//               <h2>{hero.name}</h2>
//           </Link>)
//         }
      
        <Route exact path="/heroClass/:heroClass">
          <DeckContainer selectedHero={selectedHero} getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck}/>
        </Route>
      </div>
    );
  }
  
  export default Sidebar;