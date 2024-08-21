import React from "react";
import { updateTask } from "./Db";
import { FaCheckCircle, FaSpinner, FaCircle } from "react-icons/fa";

function TaskCard({ task }) {
    const handleStatusChange = async (newStatus) => {
        await updateTask(task.id, { status: newStatus });
        window.location.reload(); // Reload the page to fetch updated tasks
    };

    return (
        <div className="flex items-center justify-between bg-gray-100 rounded p-3 shadow-sm transition transform hover:scale-105 duration-200">
            <h3 className="text-md font-medium text-gray-800">{task.title}</h3>
            <div className="flex space-x-2">
                {task.status !== "To Do" && (
                    <button onClick={() => handleStatusChange("To Do")}>
                        <FaCircle className="text-yellow-500" />
                    </button>
                )}
                {task.status !== "In Progress" && (
                    <button onClick={() => handleStatusChange("In Progress")}>
                        <FaSpinner className="text-blue-500" />
                    </button>
                )}
                {task.status !== "Completed" && (
                    <button onClick={() => handleStatusChange("Completed")}>
                        <FaCheckCircle className="text-green-500" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default TaskCard;
