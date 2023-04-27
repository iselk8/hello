import Header from "./components/Header";
import "./index.css";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dictionary from "./components/Dictionary";

function App() {
  return (

      <BrowserRouter>
          <Header>
            <Routes>
              <Route path="/employees" element={<Employees/>}/>
              <Route path="/customers" element={<Customers/>}/>
              <Route path="/dictionary" element={<Dictionary/>}/>
            </Routes>
        </Header>
      </BrowserRouter>

    );
}

export default App;
