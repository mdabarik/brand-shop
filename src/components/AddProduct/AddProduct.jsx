import { Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
    const brands = useLoaderData();
    const [value, setValue] = useState(0);
    const [selectedBrandName, setSelectedBrandName] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [prodTypes, setProdTypes] = useState([]);
    const [selectedBrandType, setSelectedBrandType] = useState("");

    useEffect(() => {
        fetch("https://brand-shop-server-dhnz4w4vc-mdabarik.vercel.app/product-types")
        .then(res => res.json())
        .then(data => {
            setProdTypes(data);
        })
        .catch(() => {
            
        })
    }, [])

    const handleBrandName = (e) => {
        setSelectedBrandName(e.target.value);
    }

    const handleType = e => {
        setSelectedBrandType(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = selectedBrandName;
        const price = form.price.value;
        const brandType = selectedBrandType;
        const shortDesc = form.shortDesc.value;
        const rating = value;
        const photoURL = form.photoURL.value;

        setErrorMessage("");
        if (rating === 0) {
            setErrorMessage("Please select product rating.");
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

        fetch("https://brand-shop-server-dhnz4w4vc-mdabarik.vercel.app/newprod", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'New product added succesfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(() => {
                
            })

    }

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center py-10 space-y-2">
                <h2 className="text-2xl font-semibold">Add New Product</h2>
                <p className="text-sm pb-5 text-center w-[90%]">Provide details information to add new product.</p>
                <form onSubmit={handleFormSubmit} className="w-[90%] md:w-[60%]">
                    {
                        errorMessage == "" ? "" :
                            <div className="alert alert-error flex items-center justify-center">
                                <span>Error: {errorMessage}</span>
                            </div>
                    }
                    <div className="form-control">
                        <label htmlFor="prod-name" className="label">Product Name</label>
                        <input required type="text" name="productName" id="prod-name" placeholder="Product name" className="input input-bordered  dark:text-black" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="options-brand" className="label">Brand Name</label>
                        <select defaultValue={setSelectedBrandName} onChange={handleBrandName} className="select select-bordered  dark:text-black" id="options-brand">
                            <option value="">Select one</option>
                            {
                                brands.map(brand => <option value={brand.brandName} key={brand._id}>{brand.brandName}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="price" className="label">Price</label>
                        <input required type="number" name="price" id="price" placeholder="Price" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="options" className="label">Select Product Type</label>
                        <select defaultValue={selectedBrandType} onChange={handleType} className="select select-bordered  dark:text-black" id="options">
                            <option value="">Select one</option>
                            {
                                prodTypes.map(prod => <option value={prod.name} key={prod._id}>{prod.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="short-desc" className="label"> Short Description</label>
                        <textarea required name="shortDesc" className="textarea textarea-bordered h-24  dark:text-black" id="short-desc" placeholder="Short description"></textarea>
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
                        <input required type="text" name="photoURL" id="photo-url" placeholder="Photo URL" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <input type="submit" className="btn btn-full w-full text-white bg-[orange] hover:bg-[#ffb731] hover:border-[orange] border-[orange] normal-case text-lg mt-3" default="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;