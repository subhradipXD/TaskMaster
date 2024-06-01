import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContextProvider";

const baseURL = "http://localhost:4000";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCookies } = useContext(UserContext);
  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginRes = await axios.post(`${baseURL}/user/login`, {
        email,
        password,
      });
      console.log(loginRes.data.error, loginRes.data.message);
      if (!loginRes.data.error) {
        setCookies("token", loginRes.data.response.token);

        navigate("/", { replace: true });
      }
      document.getElementById("errMsg").innerHTML = loginRes.data.message;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <div className="container">
          <div className="container">
            <div className="container">
              <div className="container">
                <h3 className="text-center">
                  <strong>Login Here...</strong>
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
                      <br />
                      <small>
                        don{"'"}t have any account?{" "}
                        <Link to="/register">register here</Link>
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
    </>
  );
}

export default Login;
