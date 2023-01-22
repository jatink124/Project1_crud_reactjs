import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function Delete() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('https://vol3333.000webhostapp.com/php-react-category/all-users.php').then(function(response) {
            console.log(response.data.users);
            setUsers(response.data.users);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`https://vol3333.000webhostapp.com/php-react-category/delete-user.php/?id=${id}`).then(function(response){
   
        console.log(response.data.users);
      getUsers();
        });
    }
    return (
        <div>
        
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                               
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}
