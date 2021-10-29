import React from "react";
import DeckContainer from "./deck-container";
import {Route, Switch} from 'react-router-dom'

<<<<<<< HEAD
function Sidebar({getDeckCards, deckCardList, setDisplayCards, setSelectedDeck, selectedDeck, selectedHero, setCreateDeck, setDeckCardList, deckList, setDeckList}) {
=======
function Sidebar({getDeckCards, deckCardList, setDisplayCards, setSelectedDeck, selectedDeck, selectedHero, setCreateDeck, setDeckCardList, displayDeck, setDisplayDeck}) {
>>>>>>> 2ff86b4532be6b022043972e55248efc57013a44




    return (
      <div className = "SideBar">
        <Switch>
        <Route exact path="/">
        {deckList.map(deckList => <h2>{deckList.name}</h2> )}
        </Route>
        <Route exact path="/heroClass/:heroClass">
          <DeckContainer setDisplayDeck={setDisplayDeck} displayDeck={displayDeck} setDeckCardList={setDeckCardList} selectedHero={selectedHero} getDeckCards={getDeckCards} deckCardList={deckCardList} setDisplayCards={setDisplayCards} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} setCreateDeck={setCreateDeck}/>
        </Route>
        </Switch>
      </div>
    );
  }
  
  export default Sidebar;