import React, { useState, useEffect } from "react";
import { getTasksByStatus, addTask } from "./Db";
import TaskCard from "./TaskCard";

function Board() {
    const [todoTasks, setTodoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", status: "To Do" });
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            const todo = await getTasksByStatus("To Do");
            const inProgress = await getTasksByStatus("In Progress");
            const completed = await getTasksByStatus("Completed");

            setTodoTasks(todo);
            setInProgressTasks(inProgress);
            setCompletedTasks(completed);
        };

        fetchTasks();
    }, []);

    const handleAddTask = async () => {
        if (!newTask.title) return; // Prevent empty task submission
        await addTask(newTask);
        setNewTask({ title: "", status: "To Do" });
        setShowForm(false);
        const todo = await getTasksByStatus("To Do");
        setTodoTasks(todo);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col">
            <header className="mb-6 text-center">
                <h1 className="text-4xl font-bold text-blue-700">Task Management Board</h1>
            </header>

            <div className="max-w-3xl mx-auto mb-8">
                <button
                    className="bg-blue-700 text-white py-2 px-4 rounded-full w-full hover:bg-blue-800 transition duration-200"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Cancel" : "Add Task"}
                </button>
            </div>

            {showForm && (
                <div className="bg-white rounded shadow-lg p-4 mb-8 max-w-3xl mx-auto">
                    <div className="flex space-x-4">
                        <input
                            className="flex-1 border border-gray-300 rounded px-3 py-2"
                            type="text"
                            placeholder="Task Title"
                            value={newTask.title}
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        />
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-200"
                            onClick={handleAddTask}
                        >
                            ➕
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TaskColumn title="To Do" tasks={todoTasks} />
                <TaskColumn title="In Progress" tasks={inProgressTasks} />
                <TaskColumn title="Completed" tasks={completedTasks} />
            </div>
        </div>
    );
}

const TaskColumn = ({ title, tasks }) => (
    <div className="bg-white rounded shadow-lg p-4">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">{title}</h2>
        <div className="space-y-2">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    </div>
);

export default Board;
