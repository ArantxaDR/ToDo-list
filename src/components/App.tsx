import React, { useState, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    taskInput.current?.focus();
  };

  const addTask = (name: string): void => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const toggleDoneTask = (i: number): void => {
    const newTask: ITask[] = [...tasks];
    newTask[i].done = !newTask[i].done;
    setTasks(newTask);
  };

  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };
  return (
    <>
      <Header />

      <main className="main container p-4 border-info ">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card border-info">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                    autoFocus
                    ref={taskInput}
                  />
                  <button className="btn btn-outline-success btn-block mt-2">
                    Save task
                  </button>
                </form>
              </div>
            </div>

            {tasks.map((t: ITask, i: number) => {
              return (
                <div className="card card-body mt2" key={i}>
                  <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
                    {t.name}
                  </h2>
                  <div className=" d-flex justify-content-between">
                    <button
                      className=" btn btn-info"
                      onClick={() => toggleDoneTask(i)}
                    >
                      {t.done ? "✓" : "✗"}
                    </button>
                    <button
                      className="btn btn-danger "
                      onClick={() => removeTask(i)}
                    >
                      🗑
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
