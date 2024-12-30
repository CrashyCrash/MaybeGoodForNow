import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import BackgroundSparkles from '../components/BackgroundSparkles';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="404 - Page Not Found" 
        subtitle="Oops! The page you're looking for doesn't exist."
      />
      <main className="page-content">
        <div className="container">
          <div className="not-found-content">
            <p>It seems you've wandered off the magical path. Let's get you back on track!</p>
            <Link to="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
