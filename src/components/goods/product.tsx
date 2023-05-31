import styles from './product.module.css'

export function Product() {
    return (
        <div className={styles.item}>
            <div className={styles.image}></div>
            <h3 className={styles.title}>Big Burger</h3>
            <button>add to Cart</button>
        </div>
    )
}