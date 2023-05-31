import { Product } from "../../components/goods/product";
import { Header } from "../../components/header/header";
import styles from './shop.module.css';

export function Shop() {
    return (
        <div>
            <Header></Header>
            <main className={styles.main_row}>
                <div className={styles.select_shop}>
                    <h2 className={styles.title}>Shops:</h2>
                    <div className={styles.shops_row}>
                        <button className={styles.shop_button}>McDonald's</button>
                        <button className={styles.shop_button}>McDonald's</button>
                        <button className={styles.shop_button}>McDonald's</button>
                    </div>
                </div>
                <div className={styles.select_goods}>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </main>
        </div>
    )
}