import { useEffect, useState } from 'react';
import { Goods, OrderType } from '../../utils/fiterAndUnique'
import styles from './product.module.css'
import { ORDERS } from '../../utils/constants';

export function Product({product}: {product: Goods}) {
    const {name, image, id} = product;
    const [buttonDisabled, setButtonDisabled] = useState(false);

    

    const addToCart = async () => {
        
        setButtonDisabled(true);
        const order: Array<OrderType> = await (await fetch(ORDERS)).json();
        
        let booked = false;
        order.forEach(elem => {
            if(elem.goodsId === id) booked = true;
            return;
        });
        
        if (!booked) {
            await fetch(ORDERS, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({goodsId: id, count: 1})
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