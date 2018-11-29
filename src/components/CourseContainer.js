import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

const STUDENTS_API = 'https://bayside-high.herokuapp.com/api/v1/users/146/courses'

const STUDENT = 'https://bayside-high.herokuapp.com/api/v1/users/146/students'

class CourseContainer extends Component {

  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: [],
    name: '',
    classYear: null,
    percentage: null
  }

  handleDropdownChange = (courseId) => {
  fetch(`${STUDENTS_API}/${courseId}`)
    .then(r => r.json())
    .then( students => {
      this.setState({
        students: students.students
      })
    })
  const course = this.props.courses.filter( course => course.id == courseId)
    this.setState({
      currentCourse: course
    })
  }

  handleEditClick = (student) => {
    this.setState({
      currentStudent: student,
      name: student.name,
      classYear: student.class_year,
      percentage: student.percentage
    })
  }

  handleNameInput = (input) => {
    this.setState({
      name: input
    })
  }

  handleYearInput = (input) => {
    this.setState({
      classYear: input
    })
  }

  handlePercentageInput = (input) => {
    this.setState({
      percentage: input
    })
  }

  handleSubmit = (event, student) => {
    event.preventDefault()
    fetch(`${STUDENT}/${student.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({

          class_year: this.state.classYear,
          name: this.state.name,
          percentage: this.state.percentage

      })
    })
  }

  render() {

    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.length > 0 ? this.state.currentCourse[0].name : null}
        </div>

        <CourseSelector
          courses={this.props.courses}
          handleDropdownChange={this.handleDropdownChange}currentCourse={this.state.currentCourse}/>

        <EditStudent
          currentStudent={this.state.currentStudent}
          handleNameInput={this.handleNameInput}
          handleYearInput={this.handleYearInput}
          handlePercentageInput={this.handlePercentageInput}
          name={this.state.name}
          classYear={this.state.classYear}
          percentage={this.state.percentage}
          handleSubmit={this.handleSubmit}
        />

        <StudentsList students={this.state.students} handleEditClick ={this.handleEditClick}/>
      </div>
    )
  }
}

export default CourseContainer
