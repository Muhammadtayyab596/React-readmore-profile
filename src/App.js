import "./App.css";
import Avatar from "./Images/Avatar.png";
import { useState } from "react";

function App(props) {
  const { text, size } = props;
  const [isReadMore, setState] = useState(false);

  function toggleBtn() {
    setState(!isReadMore);
  }

  
  return (
    <div className="App">
      <div className="Avatar">
        <img src={Avatar} alt="Profile Pic" />
      </div>

      <h1>Muhammad Tayyab</h1>
      <h3 style={{ marginTop: "10px" }}>Student of SMIT</h3>
      <div className="para">
        <p>
          {isReadMore ? text : text.slice(0, size)}
          <button onClick={toggleBtn} className="toggleBtn">
            {isReadMore ? "Read less" : "Read more..."}
          </button>
        </p>
      </div>
      <div className="connectWith">
        <h4>Connect with us:</h4>
        <a href="">
          <i class="fab fa-facebook"></i>
        </a>
        <a>
          <i class="fab fa-twitter"></i>
        </a>
        <a>
          <i class="fab fa-github"></i>
        </a>
        <a>
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a>
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
