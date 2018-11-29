import React, { Component } from 'react'
import CourseContainer from './CourseContainer'

const COURSE_API = 'https://bayside-high.herokuapp.com/api/v1/users/146/courses'

class App extends Component {

  state = {
    courses: []
  }

  componentDidMount(){
    fetch(COURSE_API)
      .then( r => r.json())
      .then( courses => {
        this.setState({
          courses: courses
        })
      })
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <h2>Bayside High Grade Tracker</h2>
        </div>

        <CourseContainer courses={this.state.courses}/>

      </div>
    )
  }
}

export default App
