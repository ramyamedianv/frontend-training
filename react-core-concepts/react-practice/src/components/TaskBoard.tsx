import { useEffect, useState } from "react";
import type { Task, TaskStatus } from "../types/task";
import TaskSearch from "./TaskSearch";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const initialTasks: Task[] = [
        { id: 1, title: "Understand requirements", status: "TODO" },
        { id: 2, title: "Design UI", status: "IN_PROGRESS" },
      ];

      setTasks(initialTasks);
      setFilteredTasks(initialTasks);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  function addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      status: "TODO",
    };

    setTasks((prev) => [...prev, newTask]);
    setFilteredTasks((prev) => [...prev, newTask]);
  }

  function updateTask(id: number, status: TaskStatus) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  }

  const searchTask = (query: string) => {
    setFilteredTasks(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">
        Loading tasks...
      </p>
    );

  return (
    <div className=" mt-10 p-6 bg-white shadow-lg rounded-xl w-[80%] ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Task Board
      </h1>

      <div className="space-y-4">
        <TaskSearch onSearch={searchTask} /> 
        <TaskForm onAddTask={addTask} />   
        <TaskList
          tasks={filteredTasks}
          onStatusChange={updateTask}
        />
      </div>
    </div>
  );
};

export default TaskBoard;
