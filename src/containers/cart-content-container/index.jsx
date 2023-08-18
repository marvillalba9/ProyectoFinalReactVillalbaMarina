import React from 'react';
import { CartContext } from '../../context';
//import CartContent from '../../components/cart-content';
import UserInfo from '../../components/user-info';
import { Link } from 'react-router-dom';

// const CartContentContainer = () => {
//   const { carrito, setCarrito } = useContext(CartContext);

//   console.log('Carrito:', carrito);

//   const handleRemoveFromCart = (id) => {
//     const updatedCart = carrito.filter((producto) => producto.id !== id);
//     setCarrito(updatedCart);
//   };

//   const totalPrice = carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);

//   return <CartContent carrito={carrito} handleRemoveFromCart={handleRemoveFromCart} totalPrice={totalPrice} />;
// };

// export default CartContentContainer;



const CartContentContainer = () => {
  const { carrito, createNewOrder, lastOrder } = React.useContext(CartContext);
  console.log(carrito);

  return (
    <div>
      <h1>Cart</h1>
     { 
     !carrito.length ?
     <>
     <p>No hay elementos en el carrito</p>
     <Link to="/">Ir a comprar</Link>
     </>
     :
     <>
     <div>
        <ul>
        {
          carrito.map((item, index) => (
            <li key={item.id + index} style={{ listStyleType: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center'}}>
                <img src={item.imageURL} alt={item.title} style={{ width: 40}} />
                <h2>{item.title}</h2>
                <h3>{`$${item.pricePerUnit * item.quantity} ($${item.pricePerUnit} x ${item.quantity})`}</h3>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
      <UserInfo carrito={carrito} createNewOrder={createNewOrder} lastOrder={lastOrder} />
      </>
      }
    </div>
  )
}

export default CartContentContainer