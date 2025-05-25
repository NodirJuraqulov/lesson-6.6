import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import SkeletonDetail from "../skeleton/SkeletonDetail";

const RecipesDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    scrollTo(0, 0);
  });

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${id}`)
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
    <div className="container mx-auto p-6">
      {loading && <SkeletonDetail />}

      {data ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <img
                src={data.image}
                alt={data.name}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
              <p className="text-gray-600 text-lg mb-1">
                <strong>Cuisine:</strong> {data.cuisine}
              </p>
              <p className="text-gray-600 text-lg mb-1">
                <strong>Meal Type:</strong> {data.mealType.join(", ")}
              </p>
              <p className="text-gray-600 text-lg mb-1">
                <strong>Difficulty:</strong> {data.difficulty}
              </p>
              <p className="text-gray-600 text-lg mb-1">
                <strong>Calories per Serving:</strong> {data.caloriesPerServing}
              </p>

              <div className="flex gap-6 items-center mt-4">
                <span className="text-2xl text-yellow-500 font-semibold">
                  ⭐ {data.rating}
                </span>
                <span className="text-gray-500 text-md">
                  ({data.reviewCount} reviews)
                </span>
              </div>

              <div className="mt-4 flex gap-4 text-gray-700 font-medium">
                <p>⏱ Prep: {data.prepTimeMinutes} min</p>
                <p>🔥 Cook: {data.cookTimeMinutes} min</p>
                <p>🍽 Servings: {data.servings}</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg mb-1">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-40">
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-3">Ingredients</h2>
              <ul className="list-disc ml-6 text-gray-800 space-y-1">
                {data.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-3">Instructions</h2>
              <ol className="list-decimal ml-6 text-gray-800 space-y-2">
                {data.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-xl">Loading recipe details...</p>
      )}
    </div>
  );
};

export default React.memo(RecipesDetail);
