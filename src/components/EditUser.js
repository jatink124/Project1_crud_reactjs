import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        
        axios.get(`http://localhost/php-react-category/getuserid.php/?id=${id}`).then(function(response) {
        
        console.log(response.data);
            setInputs(response.data.users[0]);
            debugger;
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      axios.post(`http://localhost/php-react-category/update-user.php/?id=${id}`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
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
          value={inputs.name}
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
         value={inputs.email}
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
          value={inputs.mobile}
          onChange={handleChange}
        />
      </div>
      <button className="bg-indigo-500 text-white w-1/5 p-2 rounded-lg hover:bg-indigo-600">
        Submit
      </button>
    </form>
        </div>
    )
}
