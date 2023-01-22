import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
    event.preventDefault();
 axios.post('https://vol3333.000webhostapp.com/php-react-category/add_category.php', inputs).then(function(response){
 console.log(response.data);
        navigate('/');
    });
    
}


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg grid md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="name">
          Name
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="email">
          Email
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" for="mobile">
          Mobile
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          id="mobile"
          name="mobile"
          onChange={handleChange}
        />
      </div>
      <button className="bg-indigo-500 text-white w-1/5 p-2 rounded-lg hover:bg-indigo-600">
        Submit
      </button>
    </form>
  );
}

export default Form;
