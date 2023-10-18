import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ cart }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5901/products/${cart.prodId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="rounded-b-lg bg-[#cfc6c6] min-h-[420px]">
            <div>
                <img className="rounded-t-lg h-[250px] w-full object-cover" src={product.photoURL} alt="photo" />
            </div>
            <div className="p-4 rounded-b-lg min-h-[200px] flex flex-col justify-between items-stretch">
                <h1 className="text-xl font-bold">{product.productName}</h1>
                <div className="flex items-center justify-between mt-2 mb-2">
                    <p>Price: {product.price}</p>
                    <p>Type: {product.brandType}</p>
                </div>
                <div className="flex-1">
                    <p className="text-sm">{product.shortDesc}</p>
                </div>
                <Link to={`/product/${product._id}`}>
                    <button className="bg-[orange] w-full rounded-lg px-6 py-2 font-bold hover:bg-[#cf8f18] text-[#403f3f]">View Details</button>
                </Link>
            </div>

        </div>
    );
};

export default Card;