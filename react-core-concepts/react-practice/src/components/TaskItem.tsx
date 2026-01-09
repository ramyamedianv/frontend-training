import type { JSX } from "react";
import type { Task, TaskStatus } from "../types/task";

type TaskItemProps = {
  task: Task;
  onStatusChange: (id: number, status: TaskStatus) => void;
};

const TaskItem = ({ task, onStatusChange }: TaskItemProps): JSX.Element => {
  const selectId = `status-${task.id}`;

  const statusColor =
    task.status === "TODO"
      ? "bg-gray-200 text-gray-800"
      : task.status === "IN_PROGRESS"
      ? "bg-yellow-200 text-yellow-800"
      : "bg-green-200 text-green-800";
  return (
    <li className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
      <span className="font-medium text-gray-800">
        {task.title}
      </span>

      <div className="flex items-center gap-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
        >
          {task.status.replace("_", " ")}
        </span>

        <label
          htmlFor={selectId}
          className="sr-only"
        >
          Change task status
        </label>

        <select
          id={selectId}
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
          className="border border-gray-300 rounded-md px-2 py-1 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </div>
    </li>
  );
};

export default TaskItem;
