// @ts-nocheck
import React, { useState, useEffect } from "react";
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Contacts from "./components/contacts/Contacts";
import Create from "./components/create/Create";
import Update from "./components/update/Update";
import { Analytics } from "@vercel/analytics/react"

function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const apiUrl=process.env.REACT_APP_API_URL;

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${apiUrl}/get`);
            const data = await response.json();
            setUsers(data);
            setFilteredUsers(data); 
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const deleteUser = async () => {
        try {
            if (!selectedUser || !selectedUser._id) {
                console.log("No user selected or user ID is missing.");
                return;
            }
    
            const response = await fetch(`${apiUrl}/delete/${selectedUser._id}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                console.log("User deleted successfully");
                setSelectedUser(null); 
                fetchUsers(); 
            } else {
                console.log("Failed to delete user");
            }
        } catch (error) {
            console.log("Error while deleting user: ", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setIsCreating(false);
        setIsUpdating(false);
    };

    const startCreateUser = () => {
        setIsCreating(true);
        setSelectedUser(null);
        setIsUpdating(false);
    };

    const startUpdateUser = () => {
        setIsUpdating(true);
        setIsCreating(false);
    };

    return (
        <>
        <div className="app">
            <Topbar users={users} setFilteredUsers={setFilteredUsers} startCreateUser={startCreateUser} />
            <div className="mainDiv">
                <div className="left">
                    <Contacts users={filteredUsers} onUserClick={handleUserClick} />
                </div>
                <div className="right">
                    {isCreating ? (
                        <Create fetchUsers={fetchUsers} setIsCreating={setIsCreating} />
                    ) : isUpdating && selectedUser ? (
                        <Update selectedUser={selectedUser} fetchUsers={fetchUsers} setIsUpdating={setIsUpdating} />
                    ) : selectedUser ? (
                        <div className="user-details">
                            <div className="details">
                                <h3>{selectedUser.name}</h3>
                                {selectedUser.email?(<p>Email: {selectedUser?.email}</p>):(<></>)}
                                <p>Phone: {selectedUser.phone}</p>
                            </div>
                            <div className="buttons">
                                <button className="updateBtn" onClick={startUpdateUser}><img src="update.png" alt="update"/></button>
                                <button className="deleteBtn" onClick={deleteUser}><img src="delete.png" alt="delete"/></button>
                            </div>
                        </div>
                    ) : (
                        <p>Select a user or create a new user</p>
                    )}
                </div>
            </div>
        </div>
        <Analytics/>
        </>
    );
}

export default App;
