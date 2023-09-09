import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const hendleSubmitAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }
    createTodo(title);
    setTitle("");
  };
  return (
    <form
      onSubmit={hendleSubmitAddTodo}
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mt-8 dark:bg-gray-800 transition-all duration-500"
    >
      <span className="rounded-full border-2 inline-block h-5 w-5 mr-2"></span>
      <input
        className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-500"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
