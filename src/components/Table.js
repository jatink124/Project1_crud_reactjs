import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const ResponsiveTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
 
    getUsers();
  }, []);

  function getUsers() {
    debugger; 
    axios.get('https://vol3333.000webhostapp.com/php-react-category/all-users.php').then(function(response) {
      debugger; 
      console.log(response.data.users);
          setUsers(response.data.users);
      });
  }



  return (
    <table className="table-auto w-10/12">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">name</th>
          <th className="px-4 py-2">email</th>
          <th className="px-4 py-2">mobile</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.email}</td>
            <td className="px-4 py-2">{item.mobile}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResponsiveTable;
