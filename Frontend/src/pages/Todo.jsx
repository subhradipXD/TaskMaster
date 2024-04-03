import { useState } from "react";
import Navbar from "../components/Navbar";

function Todo() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTitle([...title, event.target.title.value]);
    setDescription([...description, event.target.description.value]);
    event.target.title.value = "";
    event.target.description.value = "";
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container">
          <div className="container">
            <div className="container">
              <div className="container">
                <h3 className="text-center">Your Personal Task Manager</h3>
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
                    Submit
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
                  {title.map((item, index) => (
                    <li key={index}>
                      <strong>Title:</strong> {item}
                      <br />
                      <strong>Description:</strong> {description[index]}
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
