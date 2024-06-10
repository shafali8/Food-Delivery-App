import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
 <form className="place-order">
  <div className="place-order-left">
    <p className="title">Delivery Information</p>
    <div className="multi-feilds">
      <input type="text" placeholder='First name'/>
      <input type="text" placeholder='Last name'/>
    </div>
    <div className="multi-feilds">
      <input type="email" placeholder='Email Address'/>
      <input type="text" placeholder='Street'/>
    </div>
    <div className="multi-feilds">
      <input type="text" placeholder='City'/>
      <input type="text" placeholder='State'/>
    </div>
    <div className="multi-feilds">
      <input type="text" placeholder='Zip Code'/>
      <input type="text" placeholder='Country'/>
    </div>
    <input type="text"placeholder='Phone' />
  </div>
  <div className="place-order-right">
  <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()+2}</b>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
  </div>
 </form>
  )
}

export default PlaceOrder
