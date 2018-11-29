import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"
const coursesAPI = 'https://bayside-high.herokuapp.com/api/v1/users/144/courses'
class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

  handleCourseChange = (event) => {
    let foundCourse = this.state.courses.find(courseObj => {
      return courseObj.id === parseInt(event.target.value, 10)
    })
    console.log(foundCourse)
    this.setState({
      currentCourse: foundCourse
    }, ()=> {
      fetch(`https://bayside-high.herokuapp.com/api/v1/users/144/courses/${this.state.currentCourse.id}`)
        .then(response => {
        return response.json();
      })
      .then(myJson => {
         this.setState({
          students: myJson.students
        }, ()=> console.log(this.state.students))
      })
    })
  }




  componentDidMount() {
    fetch(coursesAPI)
      .then(response =>{
      return response.json();
    })
    .then(myJson => {
      this.setState({
        courses: myJson
      }, ()=>console.log(this.state.courses))
    });
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
          Course Title
        </div>


        <CourseSelector  handleCourseChange={this.handleCourseChange} courses={this.state.courses} />

        <EditStudent />

        <StudentsList students={this.state.students}  />
      </div>
    )
  }
}

export default CourseContainer
