// src/components/App.js
import React, { useEffect, useState } from "react";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import EditEmployee from "./EditEmployee";
import { fetchEmployees } from "../api";

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);

    useEffect(() => {
        const loadEmployees = async () => {
            const data = await fetchEmployees();
            setEmployees(data);
        };
        loadEmployees();
    }, []);

    const handleEdit = (employee) => {
        setEditingEmployee(employee);
    };

    const handleUpdate = (updatedEmployee) => {
        setEmployees((prev) =>
            prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
        );
        setEditingEmployee(null);
    };

    const handleCancel = () => {
        setEditingEmployee(null);
    };

    return (
        <div>
            <Header />
            {editingEmployee ? (
                <EditEmployee
                    employee={editingEmployee}
                    onUpdate={handleUpdate}
                    onCancel={handleCancel}
                />
            ) : (
                <EmployeeList employees={employees} onEdit={handleEdit} />
            )}
        </div>
    );
};

export default App;
