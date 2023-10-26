import React from 'react';
import { InertiaLink } from '@inertiajs/react';

const MentalTestPage = () => {
  return (
    <div className="mental-test-container">
      <InertiaLink href="/tes-stress">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_66t-uc_M6Uut39_hX7wAchXEU0Kw8kvjg&usqp=CAU" alt="Tes Stress" />
        <p>Tes Stress</p>
      </InertiaLink>

      <InertiaLink href="/tes-mbti">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxI7kdo8CwuhdnTRZJQWSn36GY7s-0dm0Jog&usqp=CAU" alt="Tes MBTI" />
        <p>Tes MBTI</p>
      </InertiaLink>
    </div>
  );
};

export default MentalTestPage;

