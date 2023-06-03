import { createBrowserRouter } from "react-router-dom";
import { Shop } from "../pages/shop/shop";
import { Order } from "../pages/order/order";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Shop></Shop>
    },
    {
        path: 'cart',
        element: <Order/>
    }
])