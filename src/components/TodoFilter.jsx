const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mt-8 dark:bg-gray-800 transition-all duration-500">
        <button
          onClick={() => changeFilter("all")}
          className={`${
            filter === "all"
              ? "text-blue-600"
              : "text-gray-400  hover:text-blue-600"
          } dark:text-gray-300`}
        >
          All
        </button>
        <button
          onClick={() => changeFilter("active")}
          className={`${
            filter === "active"
              ? "text-blue-600"
              : "text-gray-400  hover:text-blue-600"
          } dark:text-gray-300`}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("completed")}
          className={`${
            filter === "completed"
              ? "text-blue-600"
              : "text-gray-400  hover:text-blue-600"
          } dark:text-gray-300`}
        >
          {" "}
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
