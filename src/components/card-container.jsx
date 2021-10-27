import Card from "./card";

function CardContainer({displayCards}) {
    
  const cardList = displayCards.map(card => <Card className='card-div' key={card.id} name={card.name} img={card.img} hero_id={card.hero_id} />)

  return (
      <div className = 'CardContainer'>
        <div className='card-div'>
          {cardList}
        </div>
      </div>
    );
  }
  
  export default CardContainer;