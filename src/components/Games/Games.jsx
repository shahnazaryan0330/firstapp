import './Games.css'

// components
import GameCard from '../GameCard/GameCard'

const Games = (props) => {
   const {name, txt} = props.txt
   return (
      <section className='games'>
         <h1>{name}</h1>

         <div className="cardBlock">
            {txt.map(item => <GameCard key={item.id} txt={item}/>)}
         </div>
      </section>
   )
}

export default Games