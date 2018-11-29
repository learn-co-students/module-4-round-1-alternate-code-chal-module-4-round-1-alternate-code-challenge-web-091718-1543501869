import React from "react";

const CourseSelector = (props) => {

  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={event => props.courseSelectorHandler(event)} >
        {props.courseList.map((course, i) => {
          return (
            <option key={i} className="item" value={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CourseSelector;
