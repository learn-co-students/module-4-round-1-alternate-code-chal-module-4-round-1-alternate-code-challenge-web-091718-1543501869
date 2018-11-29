import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

const coursesUrl = 'https://bayside-high.herokuapp.com/api/v1/users/147/courses'

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

  getCourses = () => {
    fetch(coursesUrl)
      .then(resp => resp.json())
      .then(parsedResp => this.setState({courses: parsedResp}))
  }

  componentDidMount() {
    this.getCourses();
  }

  courseSelectorHandler = (event) => {
    let selectedCourse = []
    this.state.courses.map(courseObj => {
      if (courseObj.id == event.target.value) {
        selectedCourse.push(courseObj)
      }
    })
    this.setState({currentCourse: selectedCourse[0]})
    fetch(`https://bayside-high.herokuapp.com/api/v1/users/147/courses/${selectedCourse[0].id}`)
      .then(resp => resp.json())
      .then(parsedResp => this.setState({students: parsedResp.students}))
  }

  editButtonHandler = (studentObj) => {
    this.setState({currentStudent: studentObj}, () => console.log('currentStudent state: ', this.state.currentStudent))
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
        </div>

        <CourseSelector courseList={this.state.courses} courseSelectorHandler={this.courseSelectorHandler}/>

        <EditStudent currentStudent={this.state.currentStudent} />

        <StudentsList students={this.state.students} editButtonHandler={this.editButtonHandler}/>
      </div>
    )
  }
}

export default CourseContainer
