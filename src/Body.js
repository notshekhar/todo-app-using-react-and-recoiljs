import { useRecoilState } from "recoil";
import { todoState } from "./states";

function List({ render, todo, checked, onChecked, onDelete }) {
  if (render)
    return (
      <div className="list">
        <input
          id="option"
          type="checkbox"
          name="field"
          value="option"
          checked={checked}
          onClick={onChecked}
        />
        <label for="option">
          <span>
            <span />
          </span>
        </label>
        <span>{todo}</span>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  else return <div></div>;
}

export default function Body() {
  const [todo, setTodo] = useRecoilState(todoState);
  function onCheck(id) {
    let newTodos = todo.map((e) =>
      e.id == id ? { todo: e.todo, id, checked: !e.checked } : e
    );
    setTodo(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  function deleteTodo(id) {
    let newTodos = todo.filter((e) => e.id != id);
    setTodo(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  return (
    <div className="body">
      <span> Undone: </span>
      {todo.map((item) => (
        <List
          key={item.id}
          render={!item.checked}
          todo={item.todo}
          checked={item.checked}
          onChecked={() => onCheck(item.id)}
          onDelete={() => deleteTodo(item.id)}
        />
      ))}
      <span>Done: </span>
      {todo.map((item) => (
        <List
          key={item.id}
          render={item.checked}
          todo={item.todo}
          checked={item.checked}
          onChecked={() => onCheck(item.id)}
          onDelete={() => deleteTodo(item.id)}
        />
      ))}
    </div>
  );
}
