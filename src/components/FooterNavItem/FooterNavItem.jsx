import './FooterNavItem.css'

const FooterNavItem =(props) => {
   const name = props.name
   return <li className='footerNavItem'>{name}</li>
}

export default FooterNavItem