import type { Task, TaskStatus } from "../types/task";
import type { JSX } from "react";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onStatusChange: (id: number, status: TaskStatus) => void;
};

const TaskList = ({ tasks, onStatusChange }: TaskListProps): JSX.Element => {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 italic py-4">
        No tasks found
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  );
};

export default TaskList;
