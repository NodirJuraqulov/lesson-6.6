import React from "react";
import { useNavigate } from "react-router-dom";

const Recipes = ({data}) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-lg mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.map((item) => (
        <div key={item.id} className="rounded-lg w-full">
          <div className="relative">
            <img
              onClick={() => navigate(`/recipess/${item.id}`)}
              style={{ cursor: "pointer" }}
              loading="lazy"
              src={item.image}
              alt={item.title}
              className="w-full object-cover rounded-md"
            />
            <p className="absolute bg-slate-300 px-1 rounded-sm bottom-1 font-medium left-1">
              {item.mealType}
            </p>
            <p className="absolute bg-slate-300 px-1 rounded-sm bottom-1 font-medium right-1">
              {item.cuisine}
            </p>
            <p className="absolute bg-red-700 text-white w-8 h-8 flex items-center justify-center rounded-full px-1 top-2 font-medium right-2">
              {item.rating}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium my-2">{item.name}</h2>
            <p className="text-lg">
              Difficulty: <span className="font-medium">{item.difficulty}</span>
            </p>
            <p className="text-lg">
              Calory:{" "}
              <span className="font-medium">{item.caloriesPerServing}</span>
            </p>

            <div>
              <h4 className="text-xl font-medium mt-2">Ingredients:</h4>

              <ul className="ml-10">
                <li>{item.ingredients[0]}</li>
                <li>{item.ingredients[1]}</li>
                <li>{item.ingredients[2]}</li>
                <li>{item.ingredients[3]}</li>
                <li>{item.ingredients[4]}</li>
                <li>{item.ingredients[5]}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Recipes);
