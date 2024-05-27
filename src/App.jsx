// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inputs from "./Inputs";
import Todocard from "./Todocard";
import Filter from "./Filter";
import { useEffect, useState } from "react";

function App() {
  const todoData = [
    {
      id: 1,
      name: "Test1",
      description: "tododescription",
      status: "incomplete",
    },
  ];

  const [todoList, setTodoList] = useState(todoData);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState({
    id: "",
    name: "",
    description: "",
    status: "incomplete",
  });

  const handleStatus = (e, id) => {
    todoList[id].status = e.target.value;
    if (todoList[id].status === "completed") {
      setTodoList([...todoList]);

      return;
    }
    if (todoList[id].status === "incomplete") {
      setTodoList([...todoList]);
    }
  };

  const handleDelete = (id) => {
    const deleteData = todoList.filter((data) => data.id !== id);

    setTodoList(deleteData);
  };

  return (
    <div className="container-fluid  ">
      <div className="container">
        <div className="row">
          <h1 className="text-center">MY TODO</h1>
          <Inputs
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            input={input}
            setInput={setInput}
            todoList={todoList}
            setTodoList={setTodoList}
            setEditId={setEditId}
            editId={editId}
          ></Inputs>
          <div className="container mt-5">
            <div className="row mb-5">
              <span className="col-4 fw-bold">My todos</span>
              <span className="col-4 text-end fw-bold">Show Filter :</span>
              <span className="col-2">
                <Filter filter={filter} setFilter={setFilter}></Filter>
              </span>
            </div>
            <div className="row gap-5 justify-content-center">
              {todoList
                .filter((todo, id) => {
                  if (filter === "incomplete") {
                    return todo.status === filter;
                  }

                  if (filter === "completed") {
                    return todo.status === filter;
                  }
                  return todo;
                })
                .map((todo, id) => {
                  return (
                    <Todocard
                      key={id}
                      idx={id}
                      todo={todo}
                      isEdit={isEdit}
                      setIsEdit={setIsEdit}
                      setInput={setInput}
                      handleStatus={handleStatus}
                      setEditId={setEditId}
                      handleDelete={handleDelete}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
