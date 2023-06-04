import { useContext, useState } from 'react';
import styles from './product.module.css'
import { ORDERS } from '../../utils/constants';
import { OrderNumberContext } from '../../App';
import { Goods, OrderType } from '../../utils/types';

export function Product({product}: {product: Goods}) {
    const {name, image, id} = product;
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const {orderNumber} = useContext(OrderNumberContext); 

    const addToCart = async () => {
        
        setButtonDisabled(true);
        const order: {goods: Array<OrderType>} = await (await fetch(ORDERS + `/${orderNumber}`)).json();
        
        let booked = false;
        order.goods.forEach(elem => {
            if(elem.goodsId === id) booked = true;
            return;
        });
        
        if (!booked) {
            const dataBody = {
                goods: [
                    ...order.goods,
                    {goodsId: id,
                    count: 1}
                ]
            }
            await fetch(ORDERS + `/${orderNumber}`, 
            {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataBody)
            }
            );
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