import React from "react";

export default function Navbar({
  filterItem,
  menuList,
  showCart,
  setShowCart,
  cart,
  cartCount,
}) {
  return (
    <>
      <nav className="flex flex-wrap justify-center g-3 p-4 bg-white shadow-lg rounded-xl mb-3 sticky z-10 top-0 ">
        {menuList.map((curElem) => {
          return (
            <button
              key={curElem}
              className="px-5 py-2 text-sm sm:text-base font-semibold bg-gray-100 text-gray-700 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600  hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
              onClick={() => filterItem(curElem)}
            >
              {curElem}
            </button>
          );
        })}
        <button
          onClick={() => setShowCart(true)}
          className="bg-green-600 text-white px-5 py-2 rounded-full cursor-pointer"
        >
          Cart:{cartCount}
        </button>
      </nav>
    </>
  );
}
