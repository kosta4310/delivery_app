import { Goods } from '../../utils/types';
import styles from './goodsCard.module.css';
// import { Goods } from '../../utils/fiterAndUnique';
import { useState } from 'react';


type PropsType = {
    data: Goods;
}
export function GoodsCard({data}: PropsType) {
    const {image, name, price, id} = data;
    const [count, setCount] = useState(1);

    const handleSetCount: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
        const num = e.target.value;
        setCount(Number(num));
        console.log(num);

    }

    return (
        <div className={styles.data}>
                    <div className={styles.card}>
                        <div className={styles.card_row}>
                            <div className={styles.image} style={{background: image}}></div>
                            <div className={styles.right_row}>
                                <h3 className={styles.title}>{name}</h3>
                                <h3 className={styles.price}>{price}Evro</h3>
                                <input type="number" name={`count${id}`} value={count} onChange={handleSetCount} min={0}></input>
                            </div>
                        </div>
                    </div>
                </div>
    )
}