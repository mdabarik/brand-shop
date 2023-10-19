import { Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {

    
    const [value, setValue] = useState(0); // for rating
    const [errorMessage, setErrorMessage] = useState(""); // error handling

    // brand name dynamic
    const brands = useLoaderData();
    const [sBrand, setSBrand] = useState(0);
    
    // brand type dynamic
    const [prodTypes, setProdTypes] = useState([]);
    const [sBrandT, setSBrandT] = useState("");
   
    useEffect(() => {
        fetch(`http://localhost:5901/product-types`)
        .then(res => res.json())
        .then(data => {
            setProdTypes(data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])


    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5901/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            setSBrand(data.brandName);
            setSBrandT(data.brandType);
            setValue(data.rating)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = sBrand;
        const price = form.price.value;
        const brandType = sBrandT;
        const shortDesc = form.shortDesc.value;
        const rating = value;
        const photoURL = form.photoURL.value;
        // console.log(productName, brandName, price, brandType, shortDesc, rating, photoURL);
        // console.log(rating);

        setErrorMessage("");
        if (rating === 0) {
            setErrorMessage("Please select product rating.");
            console.log("select rating");
            return;
        }
        if (brandName === "") {
            setErrorMessage("Please select brand.");
            return;
        }
        if (brandType === "") {
            setErrorMessage("Please select brand type.");
            return;
        }

        const product = {
            productName, brandName, price, brandType, shortDesc, rating, photoURL
        }

        console.log(product);

        fetch(`http://localhost:5901/edit/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product updated succesfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center py-10 space-y-2">
                <h2 className="text-2xl font-semibold">Add New Product</h2>
                <p className="text-sm pb-5">Provide details information to add new product.</p>
                <form onSubmit={handleFormSubmit} className="w-[60%]">
                    {
                        errorMessage == "" ? "" :
                            <div className="alert alert-error flex items-center justify-center">
                                <span>Error: {errorMessage}</span>
                            </div>
                    }
                    <div className="form-control">
                        <label htmlFor="prod-name" className="label">Product Name</label>
                        <input defaultValue={product.productName} required type="text" name="productName" id="prod-name" placeholder="Product name" className="input input-bordered  dark:text-black" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="options-brand" className="label">Brand Name</label>
                        <select value={sBrand} onChange={(e) => setSBrand(e.target.value)} className="select select-bordered  dark:text-black" id="options-brand">
                            <option>Select one</option>
                            {
                                brands.map(brand => <option value={brand.brandName} key={brand._id}>{brand.brandName}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="price" className="label">Price</label>
                        <input required defaultValue={product.price} type="number" name="price" id="price" placeholder="Price" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="options" className="label">Select Product Type</label>
                        <select value={sBrandT} onChange={(e) => setSBrandT(e.target.value)} className="select select-bordered  dark:text-black" id="options">
                            <option value="">Select one</option>
                            {
                                prodTypes.map(prod => <option value={prod.name} key={prod._id}>{prod.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="short-desc" className="label"> Short Description</label>
                        <textarea defaultValue={product.shortDesc} required name="shortDesc" className="textarea textarea-bordered h-24  dark:text-black" id="short-desc" placeholder="Short description"></textarea>
                    </div>
                    <div className="form-control my-3 space-y-2 ">
                        <Typography className="pl-1" component="legend">Rating</Typography>
                        <Rating
                            className="bg-white py-2 px-2 rounded-lg"
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            precision={0.5}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="photo-url" className="label">Photo URL</label>
                        <input defaultValue={product.photoURL} required type="text" name="photoURL" id="photo-url" placeholder="Photo URL" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <input type="submit" className="btn btn-full w-full text-white bg-[orange] hover:bg-[#ffb731] hover:border-[orange] border-[orange] normal-case text-lg mt-3" default="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;