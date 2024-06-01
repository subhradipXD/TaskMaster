import Todo from "./pages/Todo";
import Deleted from "./pages/Deleted";
import Completed from "./pages/Completed";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { UserContextProvider } from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />}></Route>
          <Route path="/deleted" element={<Deleted />}></Route>
          <Route path="/completed" element={<Completed />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
