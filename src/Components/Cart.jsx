import React from "react";

const Cart = ({cart}) => {
    console.log(cart);

    let total2 = 0;
    let total = parseInt(total2);
    for ( const product of cart ){
        total = total + parseInt(product.price);
    }
    const tax = total*7/100 ;
    const grandTotal = total + tax ;
    // const newTotal = parseInt(total);
    // console.log(typeof total);

  return (
      <div className="bg-orange-400 rounded-lg p-5 h-1/3 w-1/4">
        <h4 className="text-xl font-bold"> Order Summery </h4>
        <p> Selected Items: {cart.length} </p>
        <p>Total Price: $ { total }</p>
        <p> Tax: $ {tax} </p>
        <p> Grand Total : $ {grandTotal.toFixed(2)} </p>
      </div>
  );
};

export default Cart;
