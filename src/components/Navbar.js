import { NavLink } from 'react-router-dom'
import { UserLogout } from '../hooks/userLogout'

//styles
import styles from './Navbar.module.css'


export default function Navbar() {
  const { logout } = UserLogout()

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>Expense Tracker </li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>  
            <li>
              <button className= "btn" onClick={logout}>Logout</button>
            </li>        
        </ul>
    </nav>
  )
}
