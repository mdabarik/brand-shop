import StarIcon from '@mui/icons-material/Star';
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Card = ({ cart, handleDelete }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://brand-shop-server-ecfp6pt65-mdabarik.vercel.app/products/${cart.prodId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(() => {
            })
    }, []);

    return (
        <div className="rounded-b-lg min-h-[420px] drop-shadow-lg">

            <div className="relative">
                <img className="rounded-t-lg w-full h-[230px] object-cover" src={product.photoURL} alt="image" />
                <div className="absolute left-0 bottom-0 flex w-full justify-between p-3">
                    <p className="bg-[#00000072] text-white text-sm rounded-full px-4 py-2">Type: {product.brandType}</p>
                    <p className="bg-[#000000ba] text-white text-sm rounded-full px-4 py-2">Brand: {product.brandName}</p>
                </div>
            </div>

            <div className="p-4 dark:text-black bg-[white] rounded-b-lg">
                <h2 className="w-fit rounded-full text-xl font-bold">Product: {product.productName}</h2>
                <p className="h-[50px] mt-2">{product.shortDesc?.substring(0, 100)}</p>
                <div className="flex items-center">
                    <span className="font-bold text-lg mr-2">Rating:</span>
                    <Rating
                        className="py-2 rounded-lg "
                        name="simple-controlled"
                        value={product.rating || 1}
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ color: 'grey' }} fontSize="inherit" />}
                        readOnly
                    />
                </div>
                <p className="font-thin text-lg mb-2">Price: ${product.price}</p>
                <div className="flex items-center justify-between">
                    <Link className="bg-[orangered] flex items-center justify-between w-fit px-4 py-2 rounded-full" to={`/product/${product._id}`}>
                        <FaRegEye className="text-[white] text-xl mr-2"></FaRegEye>
                        <span className="text-white">View</span>
                    </Link>
                    <button onClick={() => handleDelete(product._id)} className="bg-[#5c1212] flex items-center justify-between w-fit px-4 py-2 rounded-full" to={`/edit/${product._id}`}>
                        <FaTrashAlt className="text-[white] text-xl mr-2"></FaTrashAlt>
                        <span className="text-[white]">Delete</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Card;