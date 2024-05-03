import React, { useState } from 'react';

const Exercise = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <h1 className='font-bold'>Sitting Exercises for Seniors</h1>
      {showContent ? (
        <div>
          <p className='italic '>It's a frustrating catch-22. As we age, working out becomes more difficult to do since our physical abilities decrease. Yet, keeping an active lifestyle is critical to maintaining mobility and health as we grow older. ... <br /> </p>
          <p className='italic'>The good news is that taking the first step towards a healthier, more active lifestyle can be both empowering and life-changing. And it is entirely attainable! No matter your physical limitations, seated chair exercises are accessible to everyone. <br /> </p>
          {/* Paste the entire content of your seated exercises guide here */}
        </div>
      ) : (
        <button onClick={toggleContent}>Read More</button>
      )}
    </div>
  );
};

export default Exercise;
