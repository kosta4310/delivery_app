import { Header } from "../../components/header/header";
import styles from './shopping_cart.module.css';

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
                <div className={styles.data}>
                    <div className={styles.card}>
                        <div className={styles.card_row}>
                            <div className={styles.image}></div>
                            <div className={styles.right_row}>
                                <h3 className={styles.title}>Big Burger</h3>
                                <h3 className={styles.price}>9,99Evro</h3>
                                <input type="number" value={1}></input>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </main>
        </div>
    )
}