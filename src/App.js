import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/CreateUser";
import Delete from "./components/Delete";
import EditUser from "./components/EditUser";
import Footer from "./components/Footer";
import NavBar from "./components/Header";
import Form from "./components/InsertUser";
import ListUser from "./components/ListUser";
import ResponsiveTable from "./components/Table";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ResponsiveTable />} />
          <Route path="/create" element={<Form />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="Update/:id/edit" element={<EditUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
