import React from "react";

function Cart({ setShowCart, increment, decrement, cart }) {
  //   const total =  item.price * item.quantity;
  

  return (
    <div className="fixed top-0 right-0 h-screen w-90 bg-white shadow-2xl p-5 overflow-y-scroll mt-18 pb-30 ml-10">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">SHOPPING CART</h1>
        <button
          onClick={() => setShowCart(false)}
          className="text-xl font-bold cursor-pointer bg-rose-700 text-white rounded px-2"
        >
          X
        </button>
      </div>
      {cart.length === 0 ? (
        <h2 className="text-3xl font-black">CART IS EMPTY</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border p-3 rounded mb-3 h-auto">
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-xl font-bold">{item.price}</p>

            <div className="flex gap-3 item-center mt-2">
              <button
                onClick={() => decrement(item.id)}
                className="bg-red-500 text-white px-2 rounded cursor-pointer"
              >
                DECRESE
              </button>
              <span className="font-bold text-xl">{item.quantity}</span>

              <button
                onClick={() => increment(item.id)}
                className="bg-green-600 text-white px-2 rounded cursor-pointer"
              >
                INCRESE
              </button>
            </div>
            <h2 className="text-xl font-bold mt-5">
              Total:{parseInt(item.price) * item.quantity}
            </h2>
          </div>
        ))
      )}
    </div>
  );
}a

export default Cart;
