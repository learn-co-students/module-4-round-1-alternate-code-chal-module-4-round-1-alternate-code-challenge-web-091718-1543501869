import React from 'react'

const Student = ({student, handleEditClick}) => {

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.class_year}</td>
      <td>{student.percentage}</td>
      <td>
        <button onClick={() => handleEditClick(student)} className="ui button left">
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
