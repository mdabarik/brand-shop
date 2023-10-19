import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5901/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleAddToCart = () => {
        fetch(`http://localhost:5901/cart/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
        <div className="container mx-auto">
            <div className="flex py-10 w-[100%] space-y-3">
                <div className="w-[50%]">
                    <img className="w-[100%] h-[500px] object-cover rounded-lg" src={product.photoURL} alt={product.productName} />
                </div>
                <div className="ml-4 space-y-3">
                    <h4 className="text-xl">Brand: {product.brandName}</h4>
                    <h2 className="text-3xl font-bold">Name: {product.productName}</h2>
                    <h3>Type: {product.brandType}</h3>
                    <div>
                        <p>Price: ${product.price}</p>
                    </div>
                    <p>Description: {product.shortDesc}</p>
                    <button onClick={ handleAddToCart } className="bg-[orange] rounded-lg px-6 py-2 font-bold text-gray-100 hover:bg-[#cf8f18]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;