import { useState } from 'react';
import { Goods } from '../../utils/fiterAndUnique'
import styles from './product.module.css'
import { ORDERS } from '../../utils/constants';

export function Product({product}: {product: Goods}) {
    const {name, image, id} = product;
    const [buttonDisabled, setButtonDisabled] = useState(false);

    type Order = {
        id: number;
        item: number;
        count: number;
    }
    const addToCart = async () => {
        console.log('click hanler addToCart');
        setButtonDisabled(true);
        const order: Array<Order> = await (await fetch(ORDERS)).json();
        
        let haveGotItem = false;
        order.forEach(elem => {
            if(elem.item === id) haveGotItem = true;
            return;
        });
        
        if (!haveGotItem) {
            await fetch(ORDERS, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({item: id, count: 1})
            });
        }
        
        setButtonDisabled(false); 
    }

    
    return (
        <div className={styles.item}>
            <div className={styles.image} style={{background: image}}></div>
            <h3 className={styles.title}>{name}</h3>
            <button onClick={addToCart} disabled={buttonDisabled}>add to Cart</button>
        </div>
    )
}