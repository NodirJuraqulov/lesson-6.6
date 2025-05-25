import React from "react";

const Posts = ({data}) => {
  return (
    <div className="rounded-lg mt-8 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((item) => (
        <div key={item.id} className="bg-gray-200 rounded-lg p-4 w-full">
          <h2 className="text-2xl font-medium line-clamp-1 mb-2 overflow-hidden">
            {item.title}
          </h2>
          <p className="text-lg line-clamp-4 overflow-hidden">{item.body}</p>

          <div className="grid grid-cols-3 w-full gap-5 items-start mt-2">
            <div>
              <h4 className="text-xl my-1 font-medium">Tags:</h4>
              <ul className="ml-5 list-disc">
                <li>{item.tags[0]}</li>
                <li>{item.tags[1]}</li>
                <li>{item.tags[2]}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl my-1 font-medium">Reactions:</h4>
              <ul className="ml-2">
                <li>Likes: {item.reactions.likes}</li>
                <li>Dislikes: {item.reactions.dislikes}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl my-1 font-medium">Views:</h4>
              <ul className="ml-2">
                <li>Views: {item.views}</li>
                <li>UserId: {item.userId}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Posts);
