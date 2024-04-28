// components/Lesson.js

import React from 'react';
import { useParams } from 'react-router-dom';

const Lesson = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Lesson {id}</h2>
      {/* Display lesson content */}
    </div>
  );
}

export default Lesson;
