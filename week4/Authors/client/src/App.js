import './App.css';
// ! import these
import { Link, Route, Routes } from "react-router-dom"

import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Update from './components/Update';
import ShowOne from './components/ShowOne';

function App() {
  return (
    <div className="App">

      <h1>Favorit Authors</h1>

      <fieldset>
      {/* <Link to="/authors">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/authors/new" >Create</Link> */}

      </fieldset>
      
      <Routes>

        {/* Read ALL  */}
        <Route path="/authors" element={<Dashboard />} />

        {/* CREATE  */}
        <Route path="/authors/new" element={<Create />} />

        {/* Update  */}
        <Route path="/authors/:id/edit" element={<Update />} />

        {/* Read One */}
        <Route path="/authors/:id" element={<ShowOne />} />

      </Routes>
    </div>
  );
}

export default App;
