import React from 'react';

const StudentDashboard = ({ enrolledCourses, onMarkAsCompleted }) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            {course.name} - {course.instructor} - Due Date: {course.dueDate}
            <button onClick={() => onMarkAsCompleted(course.id)}>
              Mark as Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
