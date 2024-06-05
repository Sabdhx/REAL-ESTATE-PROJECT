import React from 'react';
import { Link } from 'react-router-dom';
import './UserNotFound.scss';

const UserNotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default UserNotFound;
