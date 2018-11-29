import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

  handleChange = (courseId) => {
    let selectedCourse = this.props.courseData.find((course) => {
      return course.id === parseInt(courseId);
    })
    this.setState({ currentCourse: selectedCourse })

    if (this.state.currentCourse.id) {
      fetch(`https://bayside-high.herokuapp.com/api/v1/users/145/courses/${this.state.currentCourse.id}`)
        .then(res => res.json())
        .then(course => this.setState({ students: course.students }))
    }
  }

  editHandler = (studentObj) => {
    this.setState({ currentStudent: studentObj })
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
        </div>

        <CourseSelector courseData={this.props.courseData} handleChange={this.handleChange} />

        <EditStudent currentStudent={this.state.currentStudent}/>

        <StudentsList students={this.state.students} editHandler={this.editHandler}/>
      </div>
    )
  }
}

export default CourseContainer
