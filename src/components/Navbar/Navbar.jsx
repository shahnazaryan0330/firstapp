import './Navbar.css'

// components
import NavItem from '../NavItem/NavItem'

const Navbar = (props) => {
   const arr = props.txt
   return (
      <div className='navbar'>
         {arr.map(item => <NavItem key={item.id} txt={item} />)}
      </div>
   )
}

export default Navbar