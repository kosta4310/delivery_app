import { useEffect, useState } from "react";
import { Product } from "../../components/goods/product";
import { Header } from "../../components/header/header";
import styles from './shop.module.css';
import { Goods, filterUniqueShop } from "../../utils/fiterAndUnique";
import { GOODS, ORDERS } from "../../utils/constants";

export function Shop() {
    const [shop, setShop] = useState('McDonalds');
    const [goods, setGoods] = useState<Array<Goods>>([]);
    const [shops, setShops] = useState<Array<string>>([]);
    const [orderId, setOrderId] = useState(0);

    const url = GOODS;

    // function createNewOrder() {
    //     fetch(ORDERS, {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({goods: []})
    //     })
    // }
    // createNewOrder();

    useEffect(() => {
        fetch(ORDERS, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({goods: []})
        })
        .then(res => res.json())
        .then(res => setOrderId(res.id));
    }, [])

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> | undefined = (e) => {

        setShop((e.target as HTMLElement).id);
    }

    useEffect(() => {
        fetch(url + '?shop=' + shop)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setGoods(res);
        })
        .catch(err => console.log(err));
        
    }, [shop])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            const shops = filterUniqueShop(res);
            setShops(shops);
        });
    }, [])

    return (
        
        <div>
            <Header></Header>
            <main className={styles.main_row}>
                <div className={styles.select_shop}>
                    <h2 className={styles.title}>Shops:</h2>
                    <div className={styles.shops_row}>
                        {shops.map((shop, key) => {
                            return <button key={key} id={shop} className={styles.shop_button} onClick={handleOnClick}>{shop}</button>
                        })}
                        
                    </div>
                </div>
                <div className={styles.select_goods}>
                    {goods.map((product, key) => {
                        return <Product key={product.id} product={product}></Product>;
                    })}
                    
                </div>
            </main>
        </div>
    )
}