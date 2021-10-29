import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import DeckContainer from "./deck-container";
import {Route} from 'react-router-dom'

function Sidebar({getDeckCards, deckCardList, setDisplayCards, setSelectedDeck, selectedDeck, selectedHero, setCreateDeck, setDeckCardList, displayDeck, setDisplayDeck}) {

 

    return (
      <div className = "SideBar">


        <Route exact path="/heroClass/:heroClass">
          <DeckContainer setDisplayDeck={setDisplayDeck} displayDeck={displayDeck} setDeckCardList={setDeckCardList} selectedHero={selectedHero} getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} setCreateDeck={setCreateDeck}/>
        </Route>
      </div>
    );
  }
  
  export default Sidebar;