import { useState } from "react";
import foodCollection from "./foodCollectionApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";



const uniqueList=["All",...new Set(foodCollection.map((curElem)=>{
  return curElem.category;
}))]
console.log(uniqueList);



export const Resturant = () => {
  const [menuData, setMenuData] = useState(foodCollection);
  const[menuList,setMenuList]=useState(uniqueList)

  const filterItem = (category) => {

    if(category==="All"){
      setMenuData(foodCollection);
      return;
    }
    const updatedList = foodCollection.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
    console.log("dhg");
    
  };

  return (
    <>
      
    <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard item={menuData} />
    </>
  );
};
