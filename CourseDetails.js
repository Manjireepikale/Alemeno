import React from 'react';

const CourseDetails = ({ course }) => {
  return (
    <div>
      <h2>Course Details</h2>
      <p>Name: {course.name}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>
      <details>
        <summary>Syllabus</summary>
        <ul>
          {course.syllabus.map((item) => (
            <li key={item.week}>
              Week {item.week}: {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CourseDetails;
