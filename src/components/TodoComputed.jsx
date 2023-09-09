const TodoComputed = ({ computedItemsLeft, deletAllCompleteTodo }) => {
  return (
    <section className="rounded-b-md py-4 px-4 flex justify-between bg-white dark:bg-gray-800 transition-all duration-500">
      <span className=" text-gray-400 dark:text-gray-300">
        {computedItemsLeft} items left
      </span>
      <button
        onClick={deletAllCompleteTodo}
        className=" text-gray-400 dark:text-gray-300"
      >
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
