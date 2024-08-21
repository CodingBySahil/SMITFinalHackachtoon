import React from "react";
import { updateTask } from "./Db";

function TaskCard({ task }) {
    const handleStatusChange = async (newStatus) => {
        await updateTask(task.id, { status: newStatus });
        window.location.reload(); // Reload the page to fetch updated tasks
    };

    return (
        <div className="bg-white rounded shadow p-4 mb-4 transition transform hover:scale-105 duration-200">
            <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <div className="flex space-x-2">
                {task.status !== "To Do" && (
                    <button
                        className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                        onClick={() => handleStatusChange("To Do")}
                    >
                        To Do
                    </button>
                )}
                {task.status !== "In Progress" && (
                    <button
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                        onClick={() => handleStatusChange("In Progress")}
                    >
                        In Progress
                    </button>
                )}
                {task.status !== "Completed" && (
                    <button
                        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                        onClick={() => handleStatusChange("Completed")}
                    >
                        Completed
                    </button>
                )}
            </div>
        </div>
    );
}

export default TaskCard;
