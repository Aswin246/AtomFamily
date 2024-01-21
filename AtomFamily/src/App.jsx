import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { TodoList } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1}></Todo>
      <Todo id={2}></Todo>
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValue(TodoList(id));

  return (
    <>
      <div>{todo.title}</div>

      <div>{todo.description}</div>
    </>
  );
}

export default App;
