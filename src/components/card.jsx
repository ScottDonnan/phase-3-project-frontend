
function Card({id, name, img, hero_id, selectedDeck, getDeckCards}) {
    
    return (
        <div >
            <img value={id} src={img} alt={name} />
        </div>
    );
  }
  
  export default Card;