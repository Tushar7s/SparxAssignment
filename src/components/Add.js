import { useState, useEffect } from "react";

const Add = ({ addEmployee, newEmployeeData, setNewEmployeeData, editingEmployee }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingEmployee) {
            addEmployee({ ...editingEmployee, ...newEmployeeData }); // Save changes
        } else {
            addEmployee(newEmployeeData); // Add new employee
        }
        setNewEmployeeData({ name: "", email: "" }); // Clear fields after submit
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={newEmployeeData.name}
                onChange={(e) => setNewEmployeeData({ ...newEmployeeData, name: e.target.value })}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={newEmployeeData.email}
                onChange={(e) => setNewEmployeeData({ ...newEmployeeData, email: e.target.value })}
                required
            />
            <button type="submit">{editingEmployee ? "Update Employee" : "Add Employee"}</button>
        </form>
    );
};

export default Add;
