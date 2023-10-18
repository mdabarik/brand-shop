import { useEffect, useState } from "react";
import Card from "./Card";

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

    return (
        <div className="container mx-auto flex flex-col items-center justify-center py-10">
            <h2 className="font-bold text-3xl mb-5">Products in Cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    carts.map(cart => <Card key={cart._id} cart={cart}></Card>)
                }
            </div>
        </div>
    );
};

export default Cart;