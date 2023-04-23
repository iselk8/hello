import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input type="text" onChange={(e) =>{
            console.log(e.target.value)
            setRole(e.target.value);
          }}/>
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
