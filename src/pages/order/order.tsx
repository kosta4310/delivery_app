import { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../../components/header/header";
import styles from './order.module.css';
import { ORDERS } from "../../utils/constants";
import { getGoodsById } from "../../utils/getGoodsById";
import { GoodsCard } from "../../components/goodsCard/goodsCard";
import { OrderNumberContext } from "../../App";
import { Goods, OrderType } from "../../utils/types";

export function Order() {
    const [orders, setOrders] = useState<Array<Goods>>([]);
    const {orderNumber} = useContext(OrderNumberContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const formElement = useRef<HTMLFormElement>(null);
    
    const handlerChangeCount = (dif: number) => {
        
        setTotalPrice(prev => prev + dif);
    }

    const handlerSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        fetch(ORDERS + `?id=${orderNumber}`)
        .then(res => res.json())
        .then((res: Array<{goods: Array<OrderType>, id: number}>) => {
            const [resultat] = res;            
            if (resultat?.goods.length) {               
                const ids = resultat.goods.map(order => order.goodsId);

                getGoodsById(ids).then(orders => {
                    setOrders(orders);
                    const total = orders.reduce((acc, curr) => acc + curr.price,0);
                    setTotalPrice(total);
                });
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
                <form className={styles.orders_form} ref={formElement} onSubmit={handlerSubmit}>
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

                                return <GoodsCard data={data} key={data.id} handlerChangeCount={handlerChangeCount}></GoodsCard>
                            })}
                        </div>
                    </div>
                    <div className={styles.bottom_block}>
                        <div>Total price{totalPrice}</div>
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
                

                
                
            </main>
        </div>
    )
}