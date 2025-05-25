import React from "react";

const Tugagan = () => {
  return (
    <div>
      <table className="w-full text-center bg-gray-100 border-collapse shadow border border-gray-300">
        <thead className="border-b border-gray-400 h-16 hover:bg-gray-200">
          <tr>
            <th>#</th>
            <th className="w-3/7 text-start pl-15">Guruh nomi</th>
            <th className="text-start">Yo'nalishi</th>
            <th className="text-start">O'qituvchi</th>
            <th className="text-start">Boshlash vaqti</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-400 h-12 cursor-pointer hover:bg-gray-200">
            <td className="text-start pl-4">1</td>
            <td className="text-start pl-15">IOS</td>
            <td className="text-start">Mobil dasturlash</td>
            <td className="text-start">Jhon Doe</td>
            <td className="text-start">10:00</td>
          </tr>
          <tr className="border-b border-gray-400 h-12 cursor-pointer hover:bg-gray-200">
            <td className="text-start pl-4">2</td>
            <td className="text-start pl-15">AI</td>
            <td className="text-start">Sun'iy intellekt</td>
            <td className="text-start">Selena Gomez</td>
            <td className="text-start">11:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tugagan;
