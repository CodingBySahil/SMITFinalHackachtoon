// TaskCard.jsx
import React from "react";
import { updateTask, deleteTask } from "./Db";
import { FaCheckCircle, FaSpinner, FaCircle, FaTrash } from "react-icons/fa";

function TaskCard({ task, onDelete, onUpdate }) {
    const handleStatusChange = async (newStatus) => {
        await updateTask(task.id, { status: newStatus });
        onUpdate();
    };

    const handleDelete = async () => {
        await deleteTask(task.id);
        onDelete(task.id);
    };

    return (
        <div className="flex items-center justify-between bg-gray-100 rounded p-3 shadow-sm transition transform hover:scale-105 duration-200">
            <h3 className="text-md font-medium text-gray-800">{task.title}</h3>
            <div className="flex space-x-2">
                {task.status !== "To Do" && (
                    <button className="relative group" onClick={() => handleStatusChange("To Do")}>
                        <FaCircle className="text-yellow-500" />
                        <span className="tooltip">Move to To Do</span>
                    </button>
                )}
                {task.status !== "In Progress" && (
                    <button className="relative group" onClick={() => handleStatusChange("In Progress")}>
                        <FaSpinner className="text-blue-500" />
                        <span className="tooltip">Move to In Progress</span>
                    </button>
                )}
                {task.status !== "Completed" && (
                    <button className="relative group" onClick={() => handleStatusChange("Completed")}>
                        <FaCheckCircle className="text-green-500" />
                        <span className="tooltip">Move to Completed</span>
                    </button>
                )}
                <button className="relative group" onClick={handleDelete}>
                    <FaTrash className="text-red-500" />
                    <span className="tooltip">Delete Task</span>
                </button>
            </div>
        </div>
    );
}

export default TaskCard;
