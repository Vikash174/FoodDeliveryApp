const Shimmer = () => {
  return (
    <div className=" mx-[20%] grid grid-cols-1 gap-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
      <ShimmerResCard />
    </div>
  );
};

const ShimmerResCard = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="w-[200px] h-[200px] bg-gray-100 rounded-xl"></div>
      <div className="w-[150px] h-[10px] bg-gray-100"></div>
      <div className="w-[100px] h-[10px] bg-gray-100"></div>
    </div>
  );
};
export default Shimmer;
