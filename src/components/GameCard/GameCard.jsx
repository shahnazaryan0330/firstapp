import './GameCard.css'

import img from '../../img/image'

const GameCard = (props) => {
   const txt = props.txt

   return (
      <div className="gameCard">
         <img src={img.games[+txt.id]} alt="" />
         <h2>{txt.header}</h2>
         <p>{txt.content}</p>
         <span>{txt.date}</span>
      </div>
   )
}

export default GameCard