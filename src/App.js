import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {name: "Ismail", role: "Developer", img: "https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg"},
      {name: "Houssein", role: "Hmar", img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg"},
      {name: "Chloe", role: "Intern", img: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg"},
      {name: "Goun", role: "Student", img: "https://images.pexels.com/photos/14684596/pexels-photo-14684596.jpeg"},
      {name: "Amine", role: "Manager", img: "https://images.pexels.com/photos/3777947/pexels-photo-3777947.jpeg"},
      {name: "Jacob", role: "Integrator", img: "https://images.pexels.com/photos/3768689/pexels-photo-3768689.jpeg"}
    ]
  );
  return (
    <div className="App">
      {showEmployees ? (
        <>
        <div className="flex justify-center">
          <input 
            type="text" 
            placeholder="Enter your text here" 
            className="px-4 py-2 border border-gray-400 rounded-md" 
            onChange={(e) => {
              setRole(e.target.value);
              }}
          />
        </div>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return ( 
                <Employee 
                  key={uuidv4()}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>This is false</p>
      )}
    </div>
  );
}

export default App;
