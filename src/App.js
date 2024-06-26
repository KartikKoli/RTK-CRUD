import './App.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './userPost/Home';
import CreatePost from './userPost/CreatePost';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/createPost' element={<CreatePost></CreatePost>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
