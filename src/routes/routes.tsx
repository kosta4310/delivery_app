import { createBrowserRouter } from "react-router-dom";
import { Shop } from "../pages/shop";
import { ShoppingCart } from "../pages/shopping_cart";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Shop></Shop>
    },
    {
        path: 'cart',
        element: <ShoppingCart/>
    }
])