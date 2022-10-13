import './Footer.css'

// components
import FormContact from '../FormContact/FormContact'
import FooterNavItem from '../FooterNavItem/FooterNavItem'

const Footer = (props) => {
   const { header, input } = props.txt
   const nav = props.nav 

   return (
      <footer>
         <div>
            <h1>{header}</h1>
            <FormContact txt={input} />
         </div>

         <ul>
            {nav.map(item => <FooterNavItem key={item.id} name={item.name}/>)}
         </ul>
      </footer>
   )
}

export default Footer