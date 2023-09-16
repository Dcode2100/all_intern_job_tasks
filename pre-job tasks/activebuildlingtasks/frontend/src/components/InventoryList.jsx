import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

const InventoryList = ({ toggleForm, setToggleForm }) => {
  const [entries, setEntries] = useState([]);
  const [filterDate, setFilterDate] = useState("");
  const [filterVendorName, setFilterVendorName] = useState("");

  useEffect(() => {
    // Function to fetch inventory data
    const fetchInventoryData = async () => {
      try {
        const response = await axios.get("/");
        setEntries(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInventoryData();
  }, []);

  const handleRefresh = () => {
    const fetchInventoryData = async () => {
      try {
        const response = await axios.get("/");
        setEntries(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInventoryData();
  }

  const handleFilter = () => {
    // Function to fetch filtered inventory data
    const fetchFilteredInventoryData = async () => {
      try {
        console.log("trying filter", filterDate, filterVendorName);
        const response = await axios.get("/");
        let data = response.data.data;
        
        // Apply each filter conditionally.
        if (filterDate) {
          data = data.filter(entry => entry.date === filterDate);
        }
    
        if (filterVendorName) {
          // Check if the vendor name matches (case insensitive)
          data = data.filter(entry => 
            entry.vendorName.toLowerCase() === filterVendorName.toLowerCase()
          );
        }
    
        // Set the filtered data
        setEntries(data);
        console.log(data);
      
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilteredInventoryData();
    
  };

  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl font-bold mb-4">Inventory List</h2>
      <div className="mb-4 flex border justify-between items-center h-10 pr-5">
        <div className="filter-section flex gap-6 px-5 items-center justify-center">
          <label className="flex items-center gap-3">
            Filter by Date:
            <input
              type="date"
              className="block border-black-300 border-2 border-black  w-32"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </label>
          <label className=" mt-2 flex items-center gap-3">
            Filter by Vendor Name:
            <input
              type="text"
              className="block  border-b-black border-2   w-34"
              value={filterVendorName}
              onChange={(e) => setFilterVendorName(e.target.value)}
            />
          </label>
          <button
            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-4 rounded"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
        <div className="flex gap-5">
          <button
            onClick={handleRefresh}
            className=" bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-4 rounded"
            >
            refresh
          </button>
          <button
            onClick={() => setToggleForm((prev) => !prev)}
            className=" bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-4 rounded"
          >
            Add Product
          </button>
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border border-gray-300 px-4 py-2">Item Code</th>
            <th className="border border-gray-300 px-4 py-2">Name 1</th>
            <th className="border border-gray-300 px-4 py-2">Name 2</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Vendor Name</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry._id} className="text-gray-800">
              <td className="border border-gray-300 px-4 py-2">
                {entry.itemCode}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {entry.name1}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                {entry.name2}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {entry.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {entry.vendorName}
              </td>
              <td className="border border-gray-300 px-4 py-2">{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
