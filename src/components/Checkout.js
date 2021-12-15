import React from 'react'
import '../css/Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import {useStateValue} from '../StateProvider'
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9meRe15C1WGMuMWY8V-xSghsAeW6jb_uOzw&usqp=CAU" alt="" className="checkout__ad" />
                <div>
                    <h3>Hello {user ? user?.email.split('@')[0] : 'User'}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
