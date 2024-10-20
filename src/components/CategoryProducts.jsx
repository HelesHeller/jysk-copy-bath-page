import { useParams } from 'react-router-dom';
import './CategoryProducts.css';

const products = {
    "bath-accessories": [
        {
            id: 1,
            name: "Мыльница",
            price: 100,
            description: "Красивая мыльница для ванной",
            image: "/src/assets/images/products/soap-dispenser.jpg"
        },
        {
            id: 2,
            name: "Держатель для зубных щеток",
            price: 150,
            description: "Удобный держатель для щеток",
            image: "/src/assets/images/products/toothbrush-holder.jpg"
        }
    ],
    "bath-furniture": [
        {
            id: 3,
            name: "Большой шкаф для ванной",
            price: 3000,
            description: "Вместительный шкаф для ванной",
            image: "/src/assets/images/products/bath-cabinet-large.jpg"
        },
        {
            id: 4,
            name: "Малый шкаф для ванной",
            price: 2000,
            description: "Компактный шкаф для небольшой ванной",
            image: "/src/assets/images/products/bath-cabinet-small.jpg"
        }
    ],
    "bath-shelves": [
        {
            id: 5,
            name: "Полка для ванной",
            price: 800,
            description: "Удобная полка для ванной комнаты",
            image: "/src/assets/images/products/bath-shelf1.jpg"
        },
        {
            id: 6,
            name: "Полка для полотенец",
            price: 1200,
            description: "Полка для полотенец",
            image: "/src/assets/images/products/bath-shelf2.jpg"
        }
    ]
};

const CategoryProducts = ({ addToCart }) => {
    const { categoryName } = useParams();

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="category-products">
            <h2>Товары для категории: {categoryName}</h2>
            <div className="product-list">
                {products[categoryName]?.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} style={{ width: '200px', height: '150px' }} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price} грн</p>
                        <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
                    </div>
                )) || <p>Товары для этой категории не найдены</p>}
            </div>
        </div>
    );
};

export default CategoryProducts;
