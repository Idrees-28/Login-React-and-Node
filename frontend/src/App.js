import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleUser(evt) {
    setUser(evt.target.value);
  }

  function handlePass(evt) {
    setPass(evt.target.value);
  }

  async function check() {
    try {
      const loginResponse = await axios.get(
        `http://localhost:5000/login?username=${user}&password=${pass}`
      );

      if (loginResponse.data === true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle login errors gracefully, e.g., display an error message to the user
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
        <input
          onChange={handleUser}
          name="username"
          placeholder="username"
          style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}
        />
        <input
          onChange={handlePass}
          name="password"
          placeholder="password"
          type="password" // Hide password input
          style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}
        />
        <button onClick={check} style={{ padding: "10px", borderRadius: "5px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App;