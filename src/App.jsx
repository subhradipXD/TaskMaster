import MyToDos from "./pages/MyToDos";
import Todo from "./pages/Todo";
import Deleted from "./pages/Deleted";
import Completed from "./pages/Completed";



import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />}></Route>
          <Route path="/my-todos" element={<MyToDos />}></Route>
          <Route path="/deleted" element={<Deleted/>}></Route>
          <Route path="/completed" element={<Completed/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
