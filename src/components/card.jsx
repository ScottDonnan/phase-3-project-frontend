
function Card({id, name, img, hero_id, selectedDeck, getDeckCards}) {
    
    function handleAddCardToDeck(e) {
        const cardObj = {
            deck_id: selectedDeck,
            card_id: id
        }
        console.log(cardObj)
        fetch("http://localhost:9292/card_decks", {
          method: "POST",
          headers: {Accept: "application/json",
                "Content-Type": "application/json"},
          body: JSON.stringify(cardObj)
        })
        .then(r => r.json())
        .then(data => console.log(data))
        getDeckCards(selectedDeck)
      }
    
    return (
        <div >
            <img onClick={handleAddCardToDeck} value={id} src={img} alt={name} />
        </div>
    );
  }
  
  export default Card;