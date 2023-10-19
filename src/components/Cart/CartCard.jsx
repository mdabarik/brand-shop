import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { FaRegEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const CartCard = ({ product }) => {

    return (
        <div className="rounded-xl bg-[white] text-black drop-shadow-xl">
            <div className="relative">
                <img className="rounded-t-lg w-full h-[230px] object-cover" src={product.photoURL} alt="image" />
                <div className="absolute left-0 bottom-0 flex w-full justify-between p-3">
                    <p className="bg-[#00000072] text-white text-sm rounded-full px-4 py-2">Type: {product.brandType}</p>
                    <p className="bg-[#000000ba] text-white text-sm rounded-full px-4 py-2">Brand: {product.brandName}</p>
                </div>
            </div>


            <div className="p-4">
                <h2 className="w-fit rounded-full text-xl font-bold">Product: {product.productName}</h2>
                <p className="h-[50px] mt-2">{product.shortDesc.substring(0, 100)}</p>
                <div className="flex items-center">
                    <span className="font-bold text-lg mr-2">Rating:</span>
                    <Rating
                        className="py-2 rounded-lg "
                        name="simple-controlled"
                        value={product.rating}
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
                    <Link className="bg-[black] flex items-center justify-between w-fit px-4 py-2 rounded-full" to={`/edit/${product._id}`}>
                        <AiFillEdit className="text-[white] text-xl mr-2"></AiFillEdit>
                        <span className="text-[white]">Edit</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartCard;