import { NavLink } from "react-router-dom";
import styles from './header.module.css';

export function Header() {
  return <nav className="navigation">
    <NavLink to={'/'} className={({ isActive }) =>
    isActive ? styles.active : ""
  }>
    Shop
  </NavLink> | 
  <NavLink to={'/cart'} className={({ isActive }) =>
    isActive ? styles.active : ""
  }>
    Shopping Cart
  </NavLink>
  </nav>
}
