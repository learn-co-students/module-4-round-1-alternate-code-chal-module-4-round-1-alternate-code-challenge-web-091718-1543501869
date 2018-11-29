import React from "react";
import Student from "./Student";

const StudentsList = ({students, handleEditClick}) => {

  const student = students.map( student => {
    return <Student key={student.id} student={student} handleEditClick={handleEditClick}/>
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Student Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Class Year</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Course Percentage</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Edit</h3>
          </th>
        </tr>

        {student}
      </tbody>
    </table>
  );
};

export default StudentsList;
