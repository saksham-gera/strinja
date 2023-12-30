

import React, { useState } from 'react';
import './Feedback.css';

const Feedback = ({ initials, name, review }) => {

  return (
    <div className="card">
        <div className="initials">{initials}</div>
        <div className="content">
            <div className="name">{name}</div>
            <div className="review">{review}</div>
        </div>
  </div>
  );
};

export default Feedback;
