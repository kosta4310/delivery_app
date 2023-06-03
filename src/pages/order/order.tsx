import { useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import styles from './order.module.css';
import { ORDERS } from "../../utils/constants";
import { Goods, OrderType } from "../../utils/fiterAndUnique";
import { getGoodsById } from "../../utils/getGoodsById";
import { GoodsCard } from "../../components/goodsCard/goodsCard";

export function Order() {
    const [orders, setOrders] = useState<Array<Goods>>([]);
    useEffect(() => {
        fetch(ORDERS)
        .then(res => res.json())
        .then((res: Array<OrderType>) => {
            if (res.length) {
                const ids = res.map(order => order.goodsId);
                getGoodsById(ids).then(orders => setOrders(orders));
            }
            
            
        });
        
    }, [])
    
    if (!orders.length) {
        return (
            <>
                <Header></Header>
                <h1>You have not any orders</h1>
            </>
        )
    }

    return (  
        <div>
            <Header></Header>
            <main className={styles.main_row}>
                <form className={styles.orders_form}>
                    <div>
                        <label htmlFor="name" >Name</label>
                        <input name="name" type="text"></input>
                    </div>
                </form>
                <div className={styles.orders_list}>
                {orders.map(data => {
                    return <GoodsCard data={data} key={data.id}></GoodsCard>
                })}
                </div>

                
                
            </main>
        </div>
    )
}