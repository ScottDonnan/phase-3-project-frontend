import React from "react";
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import DeckContainer from "./deck-container";
import {Route, Switch} from 'react-router-dom'

function Sidebar({getDeckCards, deckCardList, setDisplayCards, setSelectedDeck, selectedDeck}) {

 

    return (
      <div className = "SideBar">

        
        <Route exact path="/heroClass/:heroClass">
          <DeckContainer getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck}/>
        </Route>
      </div>
    );
  }
  
  export default Sidebar;