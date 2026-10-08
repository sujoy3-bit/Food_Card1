import React from 'react'

function MenuCard({item,addToCart}) {
    // console.log(item);
  return (
      <>
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 md:px-8 lg:px-12 ' >
        {item.map((curElem)=>{
            return (
               
                <div className=" w-full max-w-[360px] h-auto max-h-[500px] bg-amber-100 border-2 border-transparent rounded-2xl shadow hover:shadow-2xl transition-all duration-300 p-4 mb-10" key={curElem.id}>
              <div className=" h-5 w-5 border-2 border-gray-400 rounded-[50%] m-2 flex items-center justify-center font-bold p-3">
                {curElem.id}
              </div>
              <p className="font-semibold  ml-2 uppercase text-gray-700">
                {curElem.category}
              </p>
              <p className="ml-2 text-3xl">{curElem.name}</p>
              <p className="ml-2 mt-0.5 text-sm line-clamp-7 text-gray-800">
                {curElem.description}
              </p>
              <div className="flex justify-between px-3 mb-0.5 ">
                <p>------------------------------------</p>
                <p>READ</p>
              </div>
              <div className="flex justify-center items-center mb-10 ">
                <img
                  className="w-[200px] h-[150px] hover:scale-105 rounded cursor-pointer"
                  src={curElem.image}
                  alt=""
                />
              </div>
              <div className="flex mb-6 justify-evenly">
                <p className=" text-sm font-bold"> Price : {curElem.price}</p>

                <button  onClick={()=>addToCart(curElem)}className="border-1 border-gray-500 text-sm  font-bold  flex items-center cursor-pointer bg-gray-200  rounded p-1 text-gray-700 hover:bg-green-600 hover:text-gray-200">
                  Add to Cart
                </button>
              </div>
            </div>
            
            )

        })}          
            
            </div>
            </>
          );
        
    
        }
  


export default MenuCard