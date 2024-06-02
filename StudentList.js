import React, { useContext } from 'react';
import { StudentContext } from './StudentContext';

const StudentList = () => {
  const { students, removeStudent } = useContext(StudentContext);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.score}
            <button onClick={() => removeStudent(student.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
