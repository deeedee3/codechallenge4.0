import React, { useState } from "react";
import './body.css'
function Body() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  const [tableData, setTableData] = useState([]);
  const [searchValue,setSearchValue]= useState('')
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };
const handleSearchChange = (e) =>{
  setSearchValue(e.target.value)
}
const filteredTableData = tableData.filter((data)=>
data.description.toLowerCase().includes(searchValue.toLowerCase())
);
  return (
    <div >
      <form 
      className="content"
       onSubmit={handleSubmit} c>
        <label>
          {/* Date: */}
          <input
          className="content2"
            placeholder="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {/* Description: */}
          <input
          className="content2"
            placeholder="Description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {/* Category: */}
          <input
          className="content2"
            placeholder="Category"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          {/* Amount: */}
          <input
          className="content2"
            placeholder="Amount"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
     <input
     type="text"
     className="sea"
     placeholder="Search by description"
     value={searchValue}
     onChange={handleSearchChange}
     />
      <table className='tab'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTableData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td>{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Body;
