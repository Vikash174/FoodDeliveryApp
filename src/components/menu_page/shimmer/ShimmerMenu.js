import React from 'react';

function ShimmerMenu() {
  return (
    <div className="flex flex-col items-center">
      <ShimmerMenuHeader />
      <ShimmerMenuBody />
    </div>
  );
}

const ShimmerMenuHeader = () => {
  return (
    <div>
      <div className="w-[1080px] h-[200px] bg-gray-50 flex  gap-5 p-10 justify-between">
        <div className="">
          <div className="w-[400px] h-[10px] bg-gray-200  m-2"></div>
          <div className="w-[300px] h-[10px] bg-gray-200  m-2"></div>
          <div className="w-[200px] h-[10px] bg-gray-200  m-2"></div>
          <div className="w-[100px] h-[10px] bg-gray-200 m-2"></div>
        </div>
        <div>
          <div className="w-28 h-28 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

const ShimmerMenuBody = () => {
  return (
    <div>
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
      <ShimmerMenuDishCard />
    </div>
  );
};

const ShimmerMenuDishCard = () => {
  return (
    <div className="flex justify-between w-[1080px] m-5">
      <div>
        <div className="w-[150px] h-[10px] bg-gray-200 m-2"></div>
        <div className="w-[100px] h-[10px] bg-gray-200 m-2"></div>
        <div className="w-[50px] h-[10px] bg-gray-200 m-2"></div>
      </div>
      <div>
        <div className="w-[100px] h-[100px] bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
