import React from "react";
import Student from "./Student";

const StudentsList = (props) => {

  const studentMapper = () => {
    return props.students.map((studentObj) => {
      return (
        <tr>
          <td>{studentObj.name}</td>
          <td>{studentObj.class_year}</td>
          <td>{studentObj.percentage}</td>
          <td><button className="editbtn" onClick={() => props.editButtonHandler(studentObj)}>Edit</button></td>
        </tr>
      )
    })
  }

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
            <h3 className="ui center aligned header" >Edit</h3>
          </th>
        </tr>

        {studentMapper()}
      </tbody>
    </table>
  );
};

export default StudentsList;
