/*import { useContext } from "react";
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { countAtom, evenSelector, } from "./store/atoms/count";

function App() {
 
  return (
    <div>
      <RecoilRoot>
         <Count/>
      </RecoilRoot>
     
    </div>
  );
}

function  Count(){
  return <div>
    <CountRenderer/>
    <Buttons />
    <Eventcount/>
  </div>

}

function CountRenderer(){
  const count=useRecoilValue(countAtom);
  return<div>
    {count}
    
  </div>
}
function Eventcount(){
  const isEven =useRecoilValue(evenSelector);

  return <div>
    { isEven ? "It Is Even": null}
  </div>
}
function Buttons(){
 const setCount = useSetRecoilState(countAtom);
 console.log("re-render")
  return <div>
        <button onClick={()=>{
          setCount(count=>count+1)
      }}>INCREASE</button>

        <button onClick={()=>{
          setCount(count=>count-1)

        }}> DECREASE </button>
   </div>
}
export default App; 
*/
import  { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { todosAtom,todosSelector,filteredTodosSelector } from "./store/atoms/count";

function App() {
  return (
    <RecoilRoot>
      <div style={{ margin: "20px", textAlign: "center" }}>
        <h1>Todo App with Recoil</h1>
        <TodoInput />
        <TodoList />
        <FilteredTodos />
      </div>
    </RecoilRoot>
  );
}

function TodoInput() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useRecoilState(todosAtom);

  const addTodo = () => {
    if (title && description) {
      setTodos([...todos, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div style={{ margin: "10px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={addTodo} style={{ padding: "5px 10px" }}>
        Add Todo
      </button>
    </div>
  );
}

function TodoList() {
  const todos = useRecoilValue(todosSelector);

  return (
    <div style={{ margin: "20px" }}>
      <h2>All Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}</strong>: {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilteredTodos() {
  const filteredTodos = useRecoilValue(filteredTodosSelector);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Filtered Todos</h2>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}</strong>: {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

