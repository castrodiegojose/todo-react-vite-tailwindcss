import { useState } from "react";
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-slate-200 min-h-screen">
      <header className="container mx-auto pt-8 px-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon fill="#fff" />
          </button>
        </div>

        <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mt-8">
          <span className="rounded-full border-2 inline-block h-5 w-5 mr-2"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md">
          <article className="flex gap-4 border-b border-b-gray-400 py-4 px-4">
            <button className="felx-none rounded-full border-2 inline-block h-5 w-5 mr-2"></button>
            <p className="text-gray-600 grow">
              Complete online Javascript curse
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className=" text-gray-400">5 items left</span>
            <button className=" text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4">
        <div className="flex justify-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mt-8 ">
          <button className="text-gray-400  hover:text-blue-600">All</button>
          <button className="text-gray-400  hover:text-blue-600">Active</button>
          <button className="text-gray-400  hover:text-blue-600">
            {" "}
            Completed
          </button>
        </div>
      </section>
      <section className="text-center mt-8">
        Drag and drop to reorder list
      </section>
    </div>
  );
}

export default App;
