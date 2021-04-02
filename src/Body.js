import { useRecoilState } from "recoil";
import { todoState } from "./states";

function List({ todo, checked, onChecked, onDelete }) {
  return (
    <div className="list">
      <input type="checkbox" checked={checked} onChange={onChecked} />
      <span>{todo}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default function Body() {
  const [todo, setTodo] = useRecoilState(todoState);
  function onCheck(id) {
    setTodo(
      todo.map((e) =>
        e.id == id ? { todo: e.todo, id, checked: !e.checked } : e
      )
    );
  }
  function deleteTodo(id) {
    setTodo(todo.filter((e) => e.id != id));
  }
  return (
    <div className="body">
      {todo.map((item) => (
        <List
          key={item.id}
          todo={item.todo}
          checked={item.checked}
          onChecked={() => onCheck(item.id)}
          onDelete={() => deleteTodo(item.id)}
        />
      ))}
    </div>
  );
}
