// @ts-nocheck
import React, { useState, useEffect } from "react";

function Update({ selectedUser, fetchUsers, setIsUpdating }) {
    const [updatedUser, setUpdatedUser] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        if (selectedUser) {
            setUpdatedUser({ name: selectedUser.name, email: selectedUser.email, phone: selectedUser.phone });
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/update/${selectedUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });

            if (response.ok) {
                alert("User updated successfully!");
                setIsUpdating(false);
                fetchUsers(); // Refresh the user list
            } else {
                alert("Error updating user");
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <form className="update-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={updatedUser.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={updatedUser.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={updatedUser.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Update</button>
        </form>
    );
}

export default Update;
