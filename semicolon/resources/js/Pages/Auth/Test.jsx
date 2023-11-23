import React from 'react';
import { Link } from '@inertiajs/react';

const MentalTestPage = () => {
  return (
    <div className="mental-test-container">
      <Link to="/tes-stress">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_pvvupDU6CmG1mecoGQtj7xyJICMhZl2jg&usqp=CAU" alt="Tes Stress" />
        <p>Tes Stress</p>
      </Link>

      <Link to="/tes-mbti">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxI7kdo8CwuhdnTRZJQWSn36GY7s-0dm0Jog&usqp=CAU" alt="Tes MBTI" />
        <p>Tes MBTI</p>
      </Link>
    </div>
  );
};

const StressTest = () => {
  // Komponen untuk Tes Stress
  return <div>Tes Stress</div>;
};

const MbtiTest = () => {
  // Komponen untuk Tes MBTI
  return <div>Tes MBTI</div>;
};

export default{ MentalTestPage, StressTest, MbtiTest };
