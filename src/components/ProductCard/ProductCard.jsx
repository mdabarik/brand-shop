import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';



const ProductCard = ({ product }) => {

    return (
        <div>
            <div>
                <img src={product.photoURL} alt="image" />
                <p>{product.brandType}</p>
                <p>{product.brandName}</p>
            </div>
            <div>
                <h2>{product.productName}</h2>
                <div className="">
                    <Rating
                        className="py-2 rounded-lg "
                        name="simple-controlled"
                        value={product.rating}
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'grey' }} fontSize="inherit" />}
                        readOnly
                    />
                </div>
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