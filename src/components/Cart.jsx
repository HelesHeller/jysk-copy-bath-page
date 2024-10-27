
import './Cart.css';

const Cart = ({ cartItems }) => {
    return (
        <div className="cart-page">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.price} грн
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
