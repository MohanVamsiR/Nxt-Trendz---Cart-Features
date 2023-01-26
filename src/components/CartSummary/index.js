// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let amount = 0
      cartList.forEach(each => {
        amount += each.price * each.quantity
      })
      const items = cartList.length

      return (
        <div className="cart-overview-container">
          <h1 className="overview-heading">
            Order Total: <span className="over-view-span">RS {amount}/-</span>
          </h1>
          <p className="overview-para">{items} items in cart</p>
          <button type="button" className="button-checkout">
            {' '}
            CheckOut
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
