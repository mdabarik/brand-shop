import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Swal from "sweetalert2";
import { GlobalContext } from "../../providers/Provider";

const Cart = () => {

    const { user } = useContext(GlobalContext);
    const [isLoading, setIsLoading] = useState(true);

    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://brand-shop-server-e61d5nzmg-mdabarik.vercel.app/mycart')
            .then(response => response.json())
            .then(fetchedData => {
                const extractedData = fetchedData.filter(cart => cart.userEMAIL == user.email);
                setCarts(extractedData);
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure? Thik it',
            text: "Once deleted. It can't be recovered! Understand?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hmm, delete it!'
        }).then((res) => {
            const userEMAIL = user.email;
            const productID = id;
            const information = { userEMAIL, productID }
            if (res.isConfirmed) {
                fetch(`https://brand-shop-server-e61d5nzmg-mdabarik.vercel.app/mycart`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(information)
                })
                    .then(res => res.json())
                    .then(data => {
                        const filteredCart = carts.filter(cart => cart.productID != id && user.email == cart.userEMAIL);
                        setCarts(filteredCart);
                        const isDeleted = data.deletedCount > 0;
                        if (isDeleted) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Good job. Deleted from Cart.',
                                showConfirmButton: false,
                                timer: 2000
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err);
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
                                    carts.map(cart => <Card handleDelete={handleDelete} key={cart._id} cart={cart}></Card>)
                            }
                        </div> : ""
            }
        </div>
    );
};

export default Cart;