import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import SkeletonDetail from "../skeleton/SkeletonDetail";

const ProductDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [next, setNext] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);

    api
      .get(`/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <div className="container mx-auto mt-10">
        {loading && <SkeletonDetail />}
      </div>

      <div className="container mx-auto grid grid-cols-2 justify-between">
        <div className="flex gap-4 mt-5">
          <div className="flex flex-col gap-5 overflow-x-auto">
            {data?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="w-25 h-25 object-cover rounded-md bg-gray-200 p-4 cursor-pointer"
                onClick={() => setNext(index)}
              />
            ))}
          </div>

          <img
            className="w-120 bg-gray-200 rounded-md p-2"
            src={data?.images[next]}
            alt=""
          />
        </div>

        <div className="mt-5 bg-gray-200 p-4 rounded-md">
          <h2 className="text-5xl font-semibold mb-4">{data?.title}</h2>
          <p className="my-2 text-lg">{data?.description}</p>
          <p className="text-gray-700 font-medium">
            Category: <span className="underline">{data?.category}</span>
          </p>
          <p className="text-gray-700 font-medium">
            Brand: <span className="underline">{data?.brand}</span>
          </p>
          <div className="my-2">
            <h4 className="text-xl font-medium">Dimensions:</h4>
            <ul className="ml-10 list-disc">
              <li className="text-gray-700 font-medium">
                Width: {data?.dimensions.width}
              </li>
              <li className="text-gray-700 font-medium">
                Height: {data?.dimensions.height}
              </li>
              <li className="text-gray-700 font-medium">
                Depth: {data?.dimensions.depth}
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-8 my-2">
            <h4 className="text-xl font-medium">
              Rating: ⭐<span className="underline">{data?.rating}</span>
            </h4>
            <p className="text-xl font-medium">
              Stock: <span className="underline">{data?.stock}</span>
            </p>
          </div>
          <div>
            <p className="text-lg font-medium text-slate-800">
              WarrantyInformation: {data?.warrantyInformation}
            </p>
            <p className="text-lg font-medium text-slate-800">
              ShippingInformation: {data?.shippingInformation}
            </p>
            <p className="text-lg font-medium text-slate-800">
              AvailabilityStatus: {data?.availabilityStatus}
            </p>
          </div>
          <div className="flex items-end gap-8 my-2">
            <strong className="text-4xl">{data?.price} USD</strong>
            <p className="text-2xl bg-red-800 rounded-md py-[2px] px-[10px] font-bold">
              -{data?.discountPercentage}%
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex gap-10 justify-between mt-8">
        {data?.reviews?.map((review, index) => (
          <div className="bg-gray-200 p-4 rounded-md" key={index}>
            <p className="text-xl font-semibold mb-2">
              Rating: ⭐<span>{review.rating}</span>
            </p>
            <p className="text-lg mb-1 font-medium text-slate-800">
              Comment: "{review.comment}"
            </p>
            <p className="text-lg mb-1 font-medium text-slate-800">
              ReviewerName:{" "}
              <span className="underline">{review.reviewerName}</span>
            </p>
            <p className="text-lg mb-1 font-medium text-slate-800">
              ReviewerEmail:{" "}
              <a className="text-slate-500 underline" href="#">
                {review.reviewerEmail}
              </a>
            </p>
            <p className="text-lg mb-1 font-medium text-slate-800">
              Date: {review.date}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(ProductDetail);
