import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
 
    getUsers();
  }, []);

  function getUsers() {
      axios.get('https://vol3333.000webhostapp.com/php-react-category/all-users.php').then(function(response) {
      debugger; 
      console.log(response.data.users);
          setUsers(response.data.users);
      });
  }

  const deleteUser = (id) => {
      axios.delete(`https://vol3333.000webhostapp.com/php-react-category/delete-user.php/?id=${id}`).then(function(response){
      debugger; 
      console.log(response.data.users);
    getUsers();
      });
  }
  // const data = [
  //   { name: 'John Doe', age: 30, occupation: 'Developer' },
  //   { name: 'Jane Smith', age: 25, occupation: 'Designer' },
  //   { name: 'Bob Johnson', age: 35, occupation: 'Manager' },
  // ];

  return (
    <table className="table-auto w-10/12">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">name</th>
          <th className="px-4 py-2">email</th>
          <th className="px-4 py-2">mobile</th>
          <th className="px-4 py-2">Update</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.email}</td>
            <td className="px-4 py-2">{item.mobile}</td>
            <td className="px-4 py-2"> <Link to={`${item.id}/edit`} style={{marginRight: "10px"}}>Edit</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UpdateUser;
