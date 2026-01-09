import { useRef, type JSX } from "react";

type TaskSearchProps = {
  onSearch: (query: string) => void;
};

const TaskSearch = ({ onSearch }: TaskSearchProps): JSX.Element => {
  const searchRef = useRef<HTMLInputElement>(null);

  function searchHandler() {
    const value = searchRef.current?.value ?? "";
    onSearch(value);
  }

  return (
    <div className="flex items-end gap-3">
      <div className="flex flex-col flex-1">
        <label
          htmlFor="task-search"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Search Tasks
        </label>

        <input
          id="task-search"
          type="text"
          placeholder="Search by task title"
          ref={searchRef}
          className="border border-gray-300 rounded-lg px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        type="button"
        onClick={searchHandler}
        className="bg-green-600 text-white px-5 py-2 rounded-lg
                   hover:bg-green-700 transition font-medium"
      >
        Search
      </button>
    </div>
  );
};

export default TaskSearch;
