import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:4000";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      const addUserRes = await axios.post(`${baseURL}/user/register`, {
        email,
        password,
      });
      console.log(addUserRes.data.error, addUserRes.data.message);
      if (!addUserRes.data.error) {
        navigate("/login", { replace: true });
      }
      document.getElementById('errMsg').innerHTML = addUserRes.data.message;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="container">
        <div className="container">
          <div className="container">
            <div className="container">
              <h3 className="text-center">
                <strong>Register Here...</strong>
              </h3>
              <div className="row mt-3">
                <div className="col-md-3"></div>
                <div className="col-md-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                  <form onSubmit={handelSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="abc@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password@123"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>

                  <p className="mt-2">
                  <small id="errMsg"></small>
                  <br/>
                    <small>
                      already have an account?{" "}
                      <Link to="/login">login here</Link>
                    </small>
                  </p>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
