import React from 'react'

const EditStudent = (props) => {

  let studentName = props.currentStudent.name
  let studentClass = props.currentStudent.class_year
  let studentGrade = props.currentStudent.percentage

  console.log('props', props)
  console.log('studentName: ', studentName)
  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={""}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            value={props.currentStudent.name}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            value={props.currentStudent.class_year}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            value={props.currentStudent.percentage}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditStudent
