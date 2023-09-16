import React, { useState } from "react";
import axios from "axios";
import {RxCross2} from "react-icons/rx";
axios.defaults.baseURL = "http://localhost:8080/";

const InventoryForm = ({ toggleForm, setToggleForm }) => {
  const [formData, setFormData] = useState({
    itemCode: "",
    name1: "",
    name2: "",
    price: "",
    vendorName: "",
    date: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the backend API to store the data in the MongoDB collection
    axios
      .post("/create", formData) // Replace '/api/inventory/create' with the correct API endpoint
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors if needed
        console.error(error);
      });
      setToggleForm(prev => !prev)
  };

  return (
    <>
    
      {toggleForm && (
        <div className="h-full w-full absolute flex items-center bg-gray-100">
        <div className="w-3/5 mx-auto p-4 bg-white relative">
          <h2 className="text-2xl font-bold mb-4">Enter Inventory Data</h2>
          <button onClick={() => setToggleForm(prev => !prev)}className="absolute top-0 right-0 pt-4 pr-4 text-xl hover:scale-[1.2] transition-all duration-300 "><RxCross2/></button>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Item Code:</label>
              <input
                type="text"
                name="itemCode"
                value={formData.itemCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Name 1:</label>
              <input
                type="text"
                name="name1"
                value={formData.name1}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Name 2:</label>
              <input
                type="text"
                name="name2"
                value={formData.name2}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Price:</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Vendor Name:</label>
              <input
                type="text"
                name="vendorName"
                value={formData.vendorName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      )}
    </>
  );
};

export default InventoryForm;
