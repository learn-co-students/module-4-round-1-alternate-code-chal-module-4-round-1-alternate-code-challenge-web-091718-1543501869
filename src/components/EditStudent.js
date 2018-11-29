import React, { Component } from 'react'

class EditStudent extends Component {

  state = {
    studentName: this.props.currentStudent.name
  }

  // UNFINISHED EDIT SUBMIT HANDLER
  submitHandler = () => {
    fetch(`https://bayside-high.herokuapp.com/api/v1/users/145/students/${this.props.currentStudent.id}`, {
      method: "PATCH",
      headers: {
        "Accepts": "application/json",
        "Content-Type": "application/json"
      },

    })
  }

  render() {
    return (
      <form
        className="ui form center aligned sixteen wide column"
        onSubmit={this.submitHandler}
      >
        <div className="inline fields">
          <div className="four wide field">
            <input
              id="name"
              type="text"
              value={this.props.currentStudent.name}
            />
          </div>
          <div className="four wide field">
            <input
              id="class_year"
              type="number"
              value={this.props.currentStudent.class_year}
            />
          </div>
          <div className="four wide field">
            <input
              id="percentage"
              type="number"
              value={this.props.currentStudent.percentage}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }
}

export default EditStudent
