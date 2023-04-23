import "./App.css";
import Employee from "./components/Employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>This is false</p>
      )}
    </div>
  );
}

export default App;
