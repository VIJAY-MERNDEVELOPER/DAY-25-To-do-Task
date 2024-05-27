/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";

function Inputs({
  todoList,
  setTodoList,
  input,
  setInput,
  isEdit,
  setIsEdit,
  editId,
  setEditId,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId =
      todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;

    if (!isEdit) {
      if (input.name && input.description) {
        const newTodo = { ...input, id: newId };
        setTodoList([...todoList, newTodo]);

        setInput({
          name: "",
          description: "",
          status: "incomplete",
        });

        return;
      } else {
        alert("Enter the necessary details");
      }
    }
    if (isEdit) {
      todoList[editId] = input;
      todoList[editId].status = "incomplete";
      setTodoList([...todoList]);

      setInput({
        name: "",
        description: "",
        status: "incomplete",
      });
      todoList[editId];
      setEditId();
      setIsEdit(false);
    }
  };

  return (
    <div className="container-fluid  ">
      <form
        action=""
        className="row justify-content-center "
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="col-3 mx-2"
          placeholder="Todo Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <input
          type="text"
          className="col-3 mx-2"
          placeholder="Todo Description"
          value={input.description}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        {isEdit ? (
          <button type="submit" className="btn btn-success col-1 mx-2">
            update
          </button>
        ) : (
          <button type="submit" className="btn btn-success col-1 mx-2">
            Add Todo
          </button>
        )}
      </form>
    </div>
  );
}

export default Inputs;
