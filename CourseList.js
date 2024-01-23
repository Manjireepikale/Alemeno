import React from 'react';

const CourseList = ({ courses, onCourseClick }) => {
  return (
    <div>
      <h2>Course Listing</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} onClick={() => onCourseClick(course.id)}>
            {course.name} - {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
