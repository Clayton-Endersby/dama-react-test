import React, {useContext} from 'react'
import CartContext from '../../context/cart/CartContext'
import CurrencyFormat from 'react-currency-format';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import CartItem from '../cartItem/CartItem'

export default function Cart() {
    
    const { cartItems, showCart, showHideCart } = useContext(CartContext)
    

    return (
        <>
            {showCart && (
                <div className='cart-wrapper'>
                    <div className="cart-showhide-container">
                        <HighlightOffIcon aria-hidden='true' onClick={showHideCart} className="off-icon"/>
                    </div>
                    <div className="cart-inner-wrapper">
                        {cartItems.length === 0 ? (<h4>Cart is Currently Empty</h4>) : (<ul>
                            {cartItems.map(item => (
                                <CartItem key={item.id} item={item}/>
                            ))}
                        </ul>)}
                    </div>
                    <div className="cart-total">
                        <h3>Cart Total</h3>
                        <div></div>
                        <div className="cart-currency">
                            <CurrencyFormat value={cartItems.reduce((amount, item) => amount + item.price, 0)}displayType="text" prefix="$ " thousandSeparator="." decimalSeparator="," fixedDecimalScale={true} decimalScale={2}/>
                        </div>
                    </div>
                </div>
               
            )}
        </>
    )
}
