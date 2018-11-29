import React, { Component } from 'react'
import CourseContainer from './CourseContainer'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      courseData: []
    }
  }

  componentDidMount() {
    fetch('https://bayside-high.herokuapp.com/api/v1/users/145/courses')
      .then(res => res.json())
      .then(courses => this.setState({ courseData: courses }))
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <h2>Bayside High Grade Tracker</h2>

        </div>

        <CourseContainer courseData={this.state.courseData}/>

      </div>
    )
  }
}

export default App
