import React from 'react'

const EditStudent = ({currentStudent, handleNameInput, handleYearInput, handlePercentageInput, name, classYear, percentage, handleSubmit}) => {

  console.log(currentStudent.class_year);

  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={(event) => handleSubmit(event, currentStudent)}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            value= {name}
            onChange={(event) => handleNameInput(event.target.value)}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            value= {classYear}
            onChange={(event) => handleYearInput(event.target.value)}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            value={percentage}
            onChange={(event) => handlePercentageInput(event.target.value)}
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
