import './NavItem.css'

const NavItem = (props) => {
   const {name} = props.txt
   
   return (
      <a className='navItem' href="true">{name}</a>
   )
}

export default NavItem