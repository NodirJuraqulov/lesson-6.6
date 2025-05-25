import React, { useEffect } from "react";

const SkeletonDetail = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
        <div className="container mx-auto flex justify-between">
            <div className="flex flex-col gap-5">
                <div className="w-22 h-22 rounded-md animate-pulse bg-gray-300"></div>
                <div className="w-22 h-22 rounded-md animate-pulse bg-gray-300"></div>
                <div className="w-22 h-22 rounded-md animate-pulse bg-gray-300"></div>
            </div>

            <div className="w-[490px] h-[500px] ml-5 animate-pulse rounded-md bg-gray-300"></div>
            <div className="w-[640px] h-[500px] ml-5 animate-pulse rounded-md bg-gray-300"></div>
        </div>

        <div className="container mx-auto mt-10 grid grid-cols-3 gap-5">
            <div className="h-[250px] bg-gray-300 animate-pulse rounded-md"></div>
            <div className="h-[250px] bg-gray-300 animate-pulse rounded-md"></div>
            <div className="h-[250px] bg-gray-300 animate-pulse rounded-md"></div>
        </div>
    </>
  );
};

export default SkeletonDetail;
