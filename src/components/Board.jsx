import React, { useState, useEffect } from "react";
import { getTasksByStatus, addTask } from "./Db";
import TaskCard from "./TaskCard";

function Board() {
    const [todoTasks, setTodoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "", status: "To Do" });
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
        await addTask(newTask);
        setNewTask({ title: "", description: "", status: "To Do" });
        setShowForm(false);
        const todo = await getTasksByStatus("To Do");
        setTodoTasks(todo);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex flex-col">
            <header className="mb-4 md:mb-6">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-600">Task Management Board</h1>
            </header>

            <div className="max-w-xl mx-auto mb-8">
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-200"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Cancel" : "Add Task"}
                </button>
            </div>

            {showForm && (
                <div className="bg-white rounded shadow-lg p-4 md:p-6 mb-8 max-w-xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">Add New Task</h2>
                    <input
                        className="border border-gray-300 rounded w-full py-2 px-3 mb-4"
                        type="text"
                        placeholder="Title"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    />
                    <textarea
                        className="border border-gray-300 rounded w-full py-2 px-3 mb-4"
                        placeholder="Description"
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    />
                    <button
                        className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-200"
                        onClick={handleAddTask}
                    >
                        Submit Task
                    </button>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">To Do</h2>
                    {todoTasks.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
                <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">In Progress</h2>
                    {inProgressTasks.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
                <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Completed</h2>
                    {completedTasks.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Board;
