import { useEffect, useState } from "react";
import Card from "./Card";
import Swal from "sweetalert2";

const Cart = () => {

    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5901/cart')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCarts(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:5901/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log('deleted');
                const filtered = carts.filter(cart => cart._id != id);
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
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container mx-auto flex flex-col items-center justify-center py-10">
            <h2 className="font-bold text-3xl mb-5">Products in Cart</h2>
            {
                carts.length == 0 ? 
                <h1 className="text-center alert alert-error">Sorry, not product on cart.</h1>
                 :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            carts.map(cart => <Card handleDelete={handleDelete} key={cart._id} cart={cart}></Card>)
                        }
                    </div>
            }

        </div>
    );
};

export default Cart;