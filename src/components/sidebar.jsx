import React from "react";
import DeckContainer from "./deck-container";
import {Route, Switch} from 'react-router-dom'

function Sidebar({getDeckCards, deckCardList, setDisplayCards, setSelectedDeck, selectedDeck, selectedHero, setCreateDeck, setDeckCardList, deckList, setDeckList, displayDeck, setDisplayDeck}) {




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