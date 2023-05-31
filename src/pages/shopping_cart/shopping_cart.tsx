import { Header } from "../../components/header/header";
import './shopping_cart.css';

export function ShoppingCart() {
    return (
        <div>
            <Header></Header>
            <main>
                <form>
                    <div>
                        <label htmlFor="name" >Name</label>
                        <input name="name" type="text"></input>
                    </div>
                </form>
                <div className="data">
                    <div className="card">
                        <div className="card_row">
                            <div className="image"></div>
                            <div className="right_row">
                                <h3 className="title">Big Burger</h3>
                                <h3 className="price">9,99Evro</h3>
                                {/* <input type="range">1</input> */}
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </main>
        </div>
    )
}