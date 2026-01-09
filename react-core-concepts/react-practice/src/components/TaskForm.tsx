import { useState, type JSX } from "react";

type TaskFormProps = {
  onAddTask: (title: string) => void;
};

const TaskForm = ({ onAddTask }: TaskFormProps): JSX.Element => {
  const [title, setTitle] = useState<string>("");

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask(title);
    setTitle("");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-end gap-3"
    >
      <div className="flex flex-col flex-1">
        <label
          htmlFor="title"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Task Title
        </label>

        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="border border-gray-300 rounded-lg px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg
                   hover:bg-blue-700 transition font-medium"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
