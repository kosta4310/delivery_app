import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import styles from './order.module.css';
import { ORDERS } from "../../utils/constants";
import { getGoodsById } from "../../utils/getGoodsById";
import { GoodsCard } from "../../components/goodsCard/goodsCard";
import { OrderNumberContext } from "../../App";
import { Goods } from "../../utils/types";

export function Order() {
    const [orders, setOrders] = useState<Array<Goods>>([]);
    const {orderNumber} = useContext(OrderNumberContext);
    
    const handlerSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
        e.preventDefault();
        
        console.log((e.target as HTMLFormElement).elements);
        
    }

    useEffect(() => {
        fetch(ORDERS + `?id=${orderNumber}`)
        .then(res => res.json())
        .then((res: Array<{goods: Array<{goodsId: number, count: number, id: number}>, id: number}>) => {
            const [resultat] = res;            
            if (resultat?.goods.length) {               
                const ids = resultat.goods.map(order => order.goodsId);

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
                <form className={styles.orders_form} onSubmit={handlerSubmit}>
                    <div className={styles.form_row}>
                        <fieldset>
                            <div>
                                <label htmlFor="name" >Name:</label>
                                <input name="name" type="text"></input>
                            </div>
                            <div>
                                <label htmlFor="email" >Email:</label>
                                <input name="email" type="text"></input>
                            </div>
                            <div>
                                <label htmlFor="adress" >Adress:</label>
                                <input name="adress" type="text"></input>
                            </div>
                            <div>
                                <label htmlFor="phone" >Phone:</label>
                                <input name="phone" type="text"></input>
                            </div>
                        </fieldset>
                        <div className={styles.orders_list}>
                            {orders.map(data => {
                                return <GoodsCard data={data} key={data.id}></GoodsCard>
                            })}
                        </div>
                    </div>
                    <div className={styles.bottom_block}>
                        <div>Total price</div>
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
                

                
                
            </main>
        </div>
    )
}