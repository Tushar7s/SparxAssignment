// src/components/EditEmployee.js
import React from "react";
import { useState } from "react";

const EditEmployee = ({ employee, onUpdate, onCancel }) => {
    const [formData, setFormData] = useState({ name: employee.name, email: employee.email });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ ...employee, ...formData });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <button type="submit">Update Employee</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EditEmployee;
