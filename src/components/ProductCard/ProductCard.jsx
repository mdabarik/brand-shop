import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    return (
        <div>
            <div>
                <img src={product.photoURL} alt="image" />
                <p>{product.brandType}</p>
                <p>{product.brandName}</p>
            </div>
            <div>
                <h2>{product.productName}</h2>
                <div>Rating goes here..</div>
                <p>{product.shortDesc}</p>
                <p>Price: ${product.price}</p>
                <div>
                    <Link to={`/product/${product._id}`}>View</Link>
                    <Link to={`/edit/${product._id}`}>Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;