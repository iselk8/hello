import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

function App() {
  const showEmployees = true;
  const [employees, setEmployees] = useState(
    [
      {id: 1, name: "Ismail", role: "Developer", img: "https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg"},
      {id: 2, name: "Houssein", role: "Hmar", img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg"},
      {id: 3, name: "Chloe", role: "Intern", img: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg"},
      {id: 4, name: "Goun", role: "Student", img: "https://images.pexels.com/photos/14684596/pexels-photo-14684596.jpeg"},
      {id: 5, name: "Amine", role: "Manager", img: "https://images.pexels.com/photos/3777947/pexels-photo-3777947.jpeg"},
      {id: 6, name: "Jacob", role: "Integrator", img: "https://images.pexels.com/photos/3768689/pexels-photo-3768689.jpeg"}
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if(id === employee.id){
        return {...employee, name: newName, role: newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee])
  }

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = ( 
                  <EditEmployee 
                    id={employee.id} 
                    name={employee.name} 
                    role={employee.role} 
                    updateEmployee={updateEmployee}
                  />
                );
              return ( 
                <Employee 
                  key={employee.id}
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee}/>
        </>
      ) : (
        <p>This is false</p>
      )}
    </div>
  );
}

export default App;
