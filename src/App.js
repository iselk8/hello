import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <>
          <input type="text" onChange={(e) => {
            setRole(e.target.value);
          }}
          />
          <Employee name="Ismail" role="intern"/>
          <Employee name="Houssein" role={role}/>
          <Employee name="Chloe"/>
        </>
      ) : (
        <p>This is false</p>
      )}
    </div>
  );
}

export default App;
