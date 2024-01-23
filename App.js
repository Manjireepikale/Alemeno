import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Dummy data for courses
  useEffect(() => {
    // Fetch data from an API or use a dummy data endpoint
    // For simplicity, using dummy data here
    setCourses([
      {
        id: 1,
        name: 'React Fundamentals',
        instructor: 'Anjali',
        description: 'Learn the basics of React',
        enrollmentStatus: 'Open',
        duration: '9 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to React',
            content: 'Overview of React, setting up your development environment.',
          },
          // More syllabus items...
        ],
      },
      // More courses...
    ]);
  }, []);

  const handleCourseClick = (courseId) => {
    // Navigate to the course details page or fetch more details from API
    // For simplicity, redirecting to the course details page here
    window.location.href = `/course/${courseId}`;
  };

  const handleMarkAsCompleted = (courseId) => {
    // Mark the course as completed and update the enrolled courses state
    // For simplicity, just logging the course ID for now
    console.log(`Marking course ${courseId} as completed`);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <CourseList courses={courses} onCourseClick={handleCourseClick} />
        </Route>
        <Route path="/course/:id">
          {/* Fetch course details based on the route parameter */}
          <CourseDetails />
        </Route>
        <Route path="/dashboard">
          <StudentDashboard enrolledCourses={enrolledCourses} onMarkAsCompleted={handleMarkAsCompleted} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
