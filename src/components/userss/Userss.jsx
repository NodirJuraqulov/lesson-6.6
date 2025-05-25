import React from "react";

const Users = ({ data }) => {
  return (
    <div className="rounded-lg mt-8 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((item) => (
        <div
          key={item.id}
          className="bg-gray-300 rounded-lg p-4 flex flex-col items-center w-full"
        >
          <div className="w-40 h-40 bg-slate-900 rounded-full">
            <img
              loading="lazy"
              src={item.image}
              alt={item.firstName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h2 className="text-3xl my-3 font-medium">
            {item.firstName} {item.lastName}
          </h2>

          <div className="grid grid-cols-2 w-full gap-6 items-start">
            <div className="ml-5">
              <h4 className="text-lg font-medium mb-2">PersonalInfo:</h4>
              <ul className="ml-5 list-disc">
                <li>
                  <p className="text-md trancate w-[165px] overflow-hidden mb-2 text-slate-900">
                    BirthDate: {item.birthDate}
                  </p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">Age: {item.age}</p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">
                    Gender: {item.gender}
                  </p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">
                    BloodGroup: {item.bloodGroup}
                  </p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">
                    Height: {item.height}
                  </p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">
                    Weight: {item.weight}
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Address:</h4>
              <ul className="ml-5 list-disc">
                <li>
                  <p className="text-md mb-2 text-slate-900">
                    {item.address.address}
                  </p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">
                    {item.address.city}
                  </p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">
                    {item.address.state}
                  </p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">
                    {item.address.postalCode}
                  </p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">
                    {item.address.country}
                  </p>
                </li>
                <li>
                  <p className="text-md mb-2 text-slate-900">{item.phone}</p>
                </li>
                <li>
                  <p className="text-md mb-2 trancate w-[160px] overflow-hidden text-slate-900">
                    {item.email}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Users);
