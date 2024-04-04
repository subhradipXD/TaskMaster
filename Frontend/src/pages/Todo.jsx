import { useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/TaskManager.png";


function Todo() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title: event.target.title.value,
      description: event.target.description.value
    };
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    event.target.title.value = "";
    event.target.description.value = "";
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const taskToEdit = tasks[index];
    document.getElementById("exampleFormControlInput1").value =
      taskToEdit.title;
    document.getElementById("exampleFormControlTextarea1").value =
      taskToEdit.description;
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container">
          <div className="container">
            <div className="container">
              <div className="container">
                <h3 className="text-center">Your Personal <img src={logo} width={150}/></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="container">
          <div className="container">
            <div className="container">
              <div className="container">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      <strong>Title</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="title"
                      placeholder="Title..."
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      <strong>Description</strong>
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="description"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {editIndex !== null ? "Update" : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="container">
          <div className="container">
            <div className="container">
              <div className="container">
                <h5>
                  <strong>To-Dos</strong>
                </h5>
                <ul>
                  {tasks.map((task, index) => (
                    <li key={index}>
                      <strong>Title:</strong> {task.title}
                      <br />
                      <strong>Description:</strong> {task.description}
                      <br />
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
