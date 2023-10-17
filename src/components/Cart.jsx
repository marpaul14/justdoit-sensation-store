import CartCount from './Cart/CartCount';
import CartEmpty from './Cart/CartEmpty';
import CartItem from './Cart/CartItem';

function Cart() {
  return (
    <>
      <div>
        <div>
          <CartCount />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  );
}

export default Cart;
