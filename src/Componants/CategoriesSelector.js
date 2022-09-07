import React from "react";

function CategoriesSelector({ setChoise, options }) {
  return (
    <div className="flex justify-center">
      <select
        onChange={(e) => setChoise(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 mx-0 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Choose a categories</option>
        {options?.map((item,index) => (
          <option key={index} value={item}>{item} </option>
        ))}
      </select>
    </div>
  );
}

export default CategoriesSelector;
