import { Product } from "../../components/goods/product";
import { Header } from "../../components/header/header";
import './shop.css';

export function Shop() {
    return (
        <div>
            <Header></Header>
            <main className="main_row">
                <div className="select_shop">
                    <h2 className="title">Shops:</h2>
                    <div className="shops_row">
                        <button className="shop_button">McDonald's</button>
                        <button className="shop_button">McDonald's</button>
                        <button className="shop_button">McDonald's</button>
                    </div>
                </div>
                <div className="select_goods">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </main>
        </div>
    )
}