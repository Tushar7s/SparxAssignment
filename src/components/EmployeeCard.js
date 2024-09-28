// src/components/EmployeeCard.js
import React from "react";

const EmployeeCard = ({ employee, onEdit }) => {
    return (
        <div className="employee-card">
            <h3>{employee.name}</h3>
            <h4>{employee.email}</h4>
            <h4>Post ID: {employee.postId}</h4>
            <button onClick={() => onEdit(employee)}>Edit</button>
        </div>
    );
};

export default EmployeeCard;
