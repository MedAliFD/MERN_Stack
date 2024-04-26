import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1> Product Manager</h1>

      <Routes>

      <Route path='/' element ={<Main/>}/>
      <Route path='/product/:id' element ={<Detail/>}/>
      <Route path='/product/:id/edit' element ={<Update/>}/>

      </Routes>

    </div>
  );
}

export default App;
