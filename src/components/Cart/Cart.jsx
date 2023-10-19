import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Swal from "sweetalert2";
import { GlobalContext } from "../../providers/Provider";

const Cart = () => {

    const { user } = useContext(GlobalContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://brand-shop-server-ecfp6pt65-mdabarik.vercel.app/cart')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(d => d.email == user.email);
                setCarts(filtered);
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
            })
    }, []);

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            const info = { email: user.email, id: id }
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-ecfp6pt65-mdabarik.vercel.app/cart`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(data => {
                        const filtered = carts.filter(cart => cart.prodId != id && user.email == cart.email);
                        setCarts(filtered);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Deleted from cart succesfully.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        setIsLoading2(false);
                    })
                    .catch(err => {
                        setIsLoading2(false);
                    })
            }
        })



    }

    return (
        <div className="container mx-auto flex flex-col items-center justify-center py-10">
            <h2 className="font-bold text-2xl md:text-3xl">Products in <span className="text-[orange]">Cart</span> </h2>
            <p className="text-sm font-thin my-2 mb-3">All products on you cart you selected</p>
            {
                isLoading == false ?
                    carts.length == 0 ?
                        <h1 className="text-center text-3xl my-5 font-bold text-red-900 bg-[#ffffff61] p-3 px-6 rounded-full">Sorry, not product on cart.</h1>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto w-[90%] md:w-[100%]">
                            {
                                isLoading2 ?
                                    carts.map(cart => <Card handleDelete={handleDelete} key={cart._id} cart={cart}></Card>) : ""
                            }
                        </div> : ""
            }

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {
                    isLoading2 ?
                        // carts.map(cart => <CartCard  key={cart._id} product={cart}></CartCard>) : ""
                }
            </div> */}

        </div>
    );
};

export default Cart;