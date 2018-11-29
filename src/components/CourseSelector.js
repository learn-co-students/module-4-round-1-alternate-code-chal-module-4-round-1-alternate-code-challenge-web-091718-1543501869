import React from "react";

const CourseSelector = (props) => {
  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={props.handleCourseChange} >
        {props.courses.map(course => {
          return (
            <option
              key={course.id}
              className="item"
              value={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CourseSelector;
