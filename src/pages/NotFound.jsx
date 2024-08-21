import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="max-w-lg mx-auto mt-52 mb-56">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
        <RouterLink
          to="/"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mt-8"
        >
          Go Home
        </RouterLink>
      </div>
    </div>
  );
};

export default NotFound;

