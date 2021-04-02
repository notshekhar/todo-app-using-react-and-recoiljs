import { useRecoilState } from "recoil";
import { todoState } from "./states";

function v4() {
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let id = "xxx-xx-xx".replace(
    /x/g,
    (e) => str[Math.floor(Math.random() * str.length)]
  );
  return id;
}

export default function Header() {
  const [todo, setTodo] = useRecoilState(todoState);
  function addTodo() {
    let input = prompt("Enter a New ToDo");
    let newTodo = { checked: false, todo: input, id: v4() };
    let newTodos = [...todo, newTodo];
    setTodo(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  return (
    <div className="header">
      <div className="details">
        <span>Total: </span>
        <span>{todo.length}</span>
        <span>, Done: </span>
        <span>{todo.filter((e) => e.checked).length}</span>
      </div>
      <button className="addBtn" onClick={() => addTodo()}>
        Add ToDo
      </button>
    </div>
  );
}
