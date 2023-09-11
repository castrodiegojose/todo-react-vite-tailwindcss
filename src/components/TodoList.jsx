import { Droppable, Draggable } from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(dorppableProvider) => (
        <div
          ref={dorppableProvider.innerRef}
          {...dorppableProvider.droppableProps}
          className="bg-white overflow-hidden rounded-t-md mt-8  dark:bg-gray-800 transition-all duration-500"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvider) => (
                <TodoItem
                  todo={todo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  ref={draggableProvider.innerRef}
                  {...draggableProvider.dragHandleProps}
                  {...draggableProvider.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {dorppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
