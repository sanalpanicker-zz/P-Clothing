import React from 'react';
import Directory from '../../component/directory/directory.component';
import './homepage.style.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
