import { Rating, Typography } from "@mui/material";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AddProduct = () => {
    const brands = useLoaderData();
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const handleProductTypeChanage = (e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const brandType = selected;
        const shortDesc = form.shortDesc.value;
        const rating = value;
        const photoURL = form.photoURL.value;
        // console.log(productName, brandName, price, brandType, shortDesc, rating, photoURL);
        console.log(rating);

        setErrorMessage("");
        if (rating === 0) {
            setErrorMessage("Please select product rating.");
            console.log("select rating");
            return;
        }
        if (brandType === "") {
            setErrorMessage("Please select brand type.");
            return;
        }

        

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
                        <input required type="text" name="productName" id="prod-name" placeholder="Product name" className="input input-bordered  dark:text-black" required/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="brand-name" className="label">Brand Name</label>
                        <input required type="text" name="brandName" id="brand-name" placeholder="Brand name" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price" className="label">Price</label>
                        <input required type="number" name="price" id="price" placeholder="Price" className="input input-bordered  dark:text-black" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="options" className="label">Select Product Type</label>
                        <select defaultValue={selected} onChange={handleProductTypeChanage} className="select select-bordered  dark:text-black" id="options">
                            <option value="">Select one</option>
                            {
                                brands.map(brand => <option value={brand.brandName} key={brand._id}>{brand.brandName}</option>)
                            }
                            {/* <option value="0">Select one</option>
                            <option value="1">Google</option>
                            <option value="2">MicroSoft</option>
                            <option value="3">Apple</option>
                            <option value="4">Intel</option>
                            <option value="5">Amazon</option> */}
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