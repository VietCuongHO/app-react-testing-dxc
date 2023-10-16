import { useState } from "react";

function Todo() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = () => {
    setTodos((prev) => [...prev, todoInput]);
    setTodoInput("");
  };

//   console.log(
//     todoInput,
//     todos,
//   );

  return (
    <div>
      <h3>To-do list</h3>
      <input aria-label="todo-input" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
