import { useState } from "react";
import foodCollection from "./foodCollectionApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import Cart from "./Cart";

const uniqueList = [
  "All",
  ...new Set(
    foodCollection.map((curElem) => {
      return curElem.category;
    }),
  ),
];
console.log(uniqueList);

export const Resturant = () => {
  const [menuData, setMenuData] = useState(foodCollection);
  const [menuList, setMenuList] = useState(uniqueList);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(foodCollection);
      return;
    }
    const updatedList = foodCollection.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
    console.log("dhg");
  };

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
      setCartCount(cartCount + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setCartCount(cartCount + 1);
    }
    console.log(cart);
  };

  const increment = (id) => {
    setCart(
      cart.map(
        (item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        setCartCount(cartCount + 1),
      ),
    );
  };

  const decrement = (id) => {
    setCart(
      cart
        .map(
          (item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          setCartCount(cartCount - 1),
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <Navbar
        filterItem={filterItem}
        menuList={menuList}
        cart={cart}
        setShowCart={setShowCart}
        showCart={showCart}
        cartCount={cartCount}
      />
      <MenuCard item={menuData} addToCart={addToCart} />
      {showCart && (
        <Cart
          setShowCart={setShowCart}
          increment={increment}
          decrement={decrement}
          cart={cart}
          cartCount={cartCount}
          setCartCount={setCart}
        />
      )}
    </>
  );
};
