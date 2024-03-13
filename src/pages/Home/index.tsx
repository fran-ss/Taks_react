import { PlusCircle, Trash } from "lucide-react";
import { Button } from "../../components/Button";
import { useState } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  task: string;
  done: boolean;
};
export function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  function handleAdd() {
    if (task) {
      const todo = {
        id: uuidv4(),
        task,
        done: false
      }
      setTodos([...todos, todo])
      setTask("")
    } else {
      alert("Preencha a Tarefa")
      console.log(todos)
    }
  }
  function handleDelete(id: string) {
    
    const todofinded = todos.find(todo => todo.id === id);
    const index = todos.indexOf(todofinded!);
    const todoUpdate = [...todos]
    todoUpdate.splice(index, 1)
    setTodos(todoUpdate)
    
  }
  return (
    <div id="page-home">
      <header>
        <input type={"text"}
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Digite uma tarefa" />
        <Button title={"Adicionar"}
          Icon={PlusCircle}
          onClick={handleAdd} />
      </header>
      <main>
        {/* {
          JSON.stringify(todos, null, 2)
        } */
          todos.map(todo => (
            <div key={todo.id}>
              <strong> {todo.task}</strong>
              <Trash onClick={ () => handleDelete(todo.id)}/>
              
          </div>
        ))
        }
        
      </main>
    </div>
  );
}
