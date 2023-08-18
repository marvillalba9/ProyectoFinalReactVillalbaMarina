import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const ItemCounter = ({ stock, addToCarrito }) => {
  const [counter, setCounter] = React.useState(1);
  const [clicked, setClicked] = React.useState(false);

  const navigate = useNavigate();

  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  const handleSubstract = () => {
    if (counter <= 1) {
      return;
    }
    setCounter(counter - 1);
  }

  const handleCarrito = () => {
    addToCarrito(counter);
    setCounter(1);
    setClicked(true);
  }

  const handleNavigateCart = () => {
    return navigate('/cart');
  }

  // const increment = () => {
  //   if (quantity < stock) {
  //     setQuantity(quantity + 1);
  //   }
  // };

  // const decrement = () => {
  //   if (quantity > initial) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const handleAddToCart = () => {
  //   const addItem = { ...producto, quantity };
  //   setCarrito([...carrito, addItem]); 
  //   onAdd(addItem);
  // };

  return (
    <div>
      {
        clicked ?
        <Button onClick={handleNavigateCart}>Finalizar compra</Button>
        :
        <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <Button onClick={handleSubstract}>-</Button>
        <p>{counter}</p>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <Button onClick={handleCarrito} size="small">Agregar al carrito</Button>
      </>
      }
    </div>
  )
}

export default ItemCounter;







