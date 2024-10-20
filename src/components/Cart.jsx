import './Cart.css';
import PropTypes from 'prop-types'; // Добавляем импорт PropTypes

const Cart = ({ cartItems }) => {
    return (
        <div className="cart-page">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Ваша корзина порожня</p>
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

// Добавляем валидацию пропсов
Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Cart;
