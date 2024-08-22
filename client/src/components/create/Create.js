// @ts-nocheck
import React, { useState } from "react";

function Create({ fetchUsers, setIsCreating }) {
    const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                alert("User created successfully!");
                setNewUser({ name: '', email: '', phone: '' });
                setIsCreating(false);
                fetchUsers(); 
            } else {
                alert("Error creating user");
            }
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={newUser.name}
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
                    value={newUser.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Create;
