import Navbar from "../components/Navbar";

function MyToDos(props) {
    return ( 
        <>
        <Navbar/>
        <div className="container my-5">
        <div className="container">
          <div className="container">
            <div className="container">
              <div className="container">
                <h5>
                  <strong>To-Dos</strong>
                </h5>
                <ul>
                  {props.title.map((item, index) => (
                    <li key={index}>
                      <strong>Title:</strong> {item}
                      <br />
                      <strong>Description:</strong> {props.description[index]}
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

export default MyToDos;