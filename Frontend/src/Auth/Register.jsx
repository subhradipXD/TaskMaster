import { Link } from "react-router-dom";
import register from "../assets/register.png";
function Register() {
  return (
    <>
      <div className="container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <img src={register} width={300}/>
            </div>
            <div className="col-md-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <h3 className="mb-3">Register here...</h3>
              <div>
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </form>
                <small>Already have an account? <Link to="/login"> Login here...!</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
