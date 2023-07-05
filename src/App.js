import Appbar from './components/Appbar';
import Student from './components/Student';
import './App.css';
import StudentList from './components/StudentList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Router>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add-student" element={<Student />} />
          <Route path="/edit-student/:studentId" element={<EditStudent />} />
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
