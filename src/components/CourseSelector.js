import React from "react";

const CourseSelector = ({courses, handleDropdownChange, currentCourse}) => {


  console.log(courses)

  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={ (event)=> handleDropdownChange(event.target.value)} >
        {courses.map((course, i) => {
          return (
            <option key={i} className="item" value={course.id}>
              {course.name}
            </option>
          )
        })}

      </select>
    </div>
  );
};

export default CourseSelector;
