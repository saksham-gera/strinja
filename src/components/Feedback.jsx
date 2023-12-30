

import React, { useState } from 'react';
import './Feedback.css';

const Feedback = ({ initials, name, review }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

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
