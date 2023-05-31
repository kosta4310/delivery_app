import { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css';

export function Header() {
  return <nav className="navigation">
    <NavLink to={'/'} className={({ isActive }) =>
    isActive ? "active" : ""
  }>
    Shop
  </NavLink> | 
  <NavLink to={'/cart'} className={({ isActive }) =>
    isActive ? "active" : ""
  }>
    Shopping Cart
  </NavLink>
  </nav>
}
