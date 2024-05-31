import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/TaskManager.png";
import { AiTwotoneDelete } from "react-icons/ai";
// import { CiEdit } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

import axios from "axios";

const baseURL = "http://localhost:4000";

function Todo() {
  const getAllToDos = (setTodo) => {
    axios.get(baseURL).then(({ data }) => {
      console.log(data);
      setTodo(data);
    });
  };

  const [toDo, setToDos] = useState([]);

  useEffect(() => {
    getAllToDos(setToDos);
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (isEditing) {
      handleEdit(editId);
    } else {
      try {
        const addToDosRes = await axios.post(`${baseURL}/save`, {
          title,
          description,
        });
        setTitle("");
        setDescription("");
        console.log(addToDosRes);

        getAllToDos(setToDos);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEdit = async (id) => {
    try {
      const editedToDo = await axios.post(`${baseURL}/update`, {
        _id: id,
        title,
        description,
      });

      console.log("ToDo updated successfully:", editedToDo);

      setTitle("");
      setDescription("");
      setIsEditing(false);
      setEditId(null);

      getAllToDos(setToDos);
    } catch (err) {
      console.error("Error updating ToDo:", err);
    }
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEditClick = (id, title, description) => {
    setEditId(id);
    setTitle(title);
    setDescription(description);
    setIsEditing(true);
  };

  const handleDelete = async (_id) => {
    try {
      const deletedToDo = await axios.post(`${baseURL}/delete`, { _id });

      console.log("ToDo deleted successfully:", deletedToDo);

      getAllToDos(setToDos);
    } catch (err) {
      console.error("Error deleting ToDo:", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container">
          <div className="container">
            <div className="container">
              <div className="container">
                <h3 className="text-center">
                  Your Personal <img src={logo} width={150} />
                </h3>
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
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
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
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {isEditing ? "Update ToDo" : "Add ToDo"}
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
                  {toDo.map((item) => (
                    <li key={item._id}>
                      <strong>Title:</strong> {item.title}
                      <br />
                      <strong>Description:</strong> {item.description}
                      <br />
                      <div className="my-2">
                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            handleEditClick(
                              item._id,
                              item.title,
                              item.description
                            )
                          }
                        >
                          {/* <CiEdit /> */}
                          <FaRegEdit />
                        </button>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => handleDelete(item._id)}
                        >
                          <AiTwotoneDelete />
                        </button>
                      </div>
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
