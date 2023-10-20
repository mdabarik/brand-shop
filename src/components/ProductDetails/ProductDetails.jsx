import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { GlobalContext } from "../../providers/Provider";
import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useContext(GlobalContext);

    console.log(typeof product.rating);

    useEffect(() => {
        fetch(`https://brand-shop-server-ecfp6pt65-mdabarik.vercel.app/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleAddToCart = () => {
        const email = user?.email;
        const info = { id, email }
        fetch(`https://brand-shop-server-ecfp6pt65-mdabarik.vercel.app/cart`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product added in cart.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Opps!',
                        text: 'Already Exist in the Cart.',
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container w-[90%] md:w-[100%] mx-auto">
            <div className="flex flex-col md:flex-row py-10 w-[100%] space-y-3">
                <div className=" w-[90vw] md:w-[50vw] lg:w-[50%]">
                    <img className="w-[100%] h-[200px] md:h-[500px] object-cover rounded-lg" src={product.photoURL} alt={product.productName} />
                </div>
                <div className="ml-4 space-y-3 flex-1">
                    <h4 className="text-xl">Brand: {product.brandName}</h4>
                    <h2 className="text-3xl font-bold">Name: {product.productName}</h2>
                    <h3>Type: {product.brandType}</h3>
                    <div className="">
                        <Rating
                            className="py-2 rounded-lg "
                            name="simple-controlled"
                            value={product.rating || 1}
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ color: 'grey' }} fontSize="inherit" />}
                            readOnly
                        />
                    </div>
                    <div>
                        <p>Price: ${product.price}</p>
                    </div>
                    <p>Description: {product.shortDesc}</p>
                    <button onClick={handleAddToCart} className="bg-[orange] rounded-lg px-6 py-2 font-bold text-gray-100 hover:bg-[#cf8f18]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;