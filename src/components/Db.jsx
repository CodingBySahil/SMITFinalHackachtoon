import { db } from "../firebase/config";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";

const tasksCollection = collection(db, "tasks");

export const addTask = async (task) => {
    return await addDoc(tasksCollection, task);
};

export const updateTask = async (id, updatedTask) => {
    const taskDoc = doc(db, "tasks", id);
    return await updateDoc(taskDoc, updatedTask);
};

export const deleteTask = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    return await deleteDoc(taskDoc);
};

export const getTasksByStatus = async (status) => {
    const q = query(tasksCollection, where("status", "==", status));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};
