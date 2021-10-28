import Card from "./card";
import HeroCards from "./heroCards";
import {Route, Switch} from 'react-router-dom'

function CardContainer({displayCards, selectedDeck, getDeckCards, setSelectedHero}) {
    
  const cardList = displayCards.map(card => <Card  key={card.id} getDeckCards={getDeckCards} selectedDeck={selectedDeck} id={card.id} name={card.name} img={card.img} hero_id={card.hero_id} />)

  return (
      <div className = 'CardContainer'>
        <div className='card-div'>
          <Switch>
            <Route exact path="/">
              {cardList}
            </Route>

            <Route exact path="/heroClass/:heroClass">
              <HeroCards setSelectedHero={setSelectedHero} getDeckCards={getDeckCards} selectedDeck={selectedDeck}/>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
  
  export default CardContainer;