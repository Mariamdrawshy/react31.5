import React from 'react';
import StudentProvider from './StudentContext';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import './App.css';

function App() {
  return (
    <StudentProvider>
      <div className="App">
        <h1>Student Management App</h1>
        <StudentForm />
        <StudentList />
      </div>
    </StudentProvider>
  );
}

export default App;
