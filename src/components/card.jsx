
function Card({name, img, hero_id}) {
    return (
        <div >
            <img src = {img} alt={name} />
        </div>
    );
  }
  
  export default Card;