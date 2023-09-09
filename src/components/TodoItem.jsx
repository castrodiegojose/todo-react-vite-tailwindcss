import CrossIcon from "./icons/IconCross";
import IconCheck from "../components/icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
      <button
        className={`flex h-5 w-5 flex-none border-2 mr-2 rounded-full${
          completed
            ? " items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : " inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`${
          completed
            ? "text-gray-400 grow line-through dark:text-gray-500"
            : "text-gray-600 grow dark:text-gray-300"
        }`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
