import { Link } from 'react-router-dom';
import './CategoryItem.css';

const CategoryItem = ({ name, image, path }) => {
    return (
        <div className="category-item">
            <Link to={`/categories/${path}`}>
                <img src={image} alt={name} style={{ width: '300px', height: '200px' }} />
                <h3>{name}</h3>
            </Link>
        </div>
    );
};

export default CategoryItem;
