import React, { useState, useEffect } from "react";

function UserApi() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleUserChange = (event) => {
        const userId = parseInt(event.target.value, 10);
        const user = users.find((user) => user.id === userId);
        setSelectedUser(user);
    };

    return (
        <div>
            <h1>Users List</h1>
            <label htmlFor="userDropdown">Select a User: </label>
            <select id="userDropdown" onChange={handleUserChange}>
                <option value="">-- Select a User --</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>

            {selectedUser && (
                <div>
                    <h2>Selected User Details</h2>
                    <table border="1" cellPadding="10" cellSpacing="0" align="center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{selectedUser.id}</td>
                                <td>{selectedUser.name}</td>
                                <td>{selectedUser.username}</td>
                                <td>{selectedUser.email}</td>
                                <td>{selectedUser.phone}</td>
                                <td>{selectedUser.website}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default UserApi;
