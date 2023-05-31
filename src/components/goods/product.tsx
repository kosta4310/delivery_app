import './product.css'

export function Product() {
    return (
        <div className="item">
            <div className="image"></div>
            <h3 className="title">Big Burger</h3>
            <button>add to Cart</button>
        </div>
    )
}