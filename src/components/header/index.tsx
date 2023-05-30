import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  return <nav>
    <NavLink to={'/'}>
    Shop
  </NavLink> | 
  <NavLink to={'/cart'}>
    Shopping Cart
  </NavLink>
  </nav>
}
