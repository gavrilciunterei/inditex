import React from 'react';
import TextDescription from './TextDescription';

function DescriptionItems({ name, text }) {
  return (
    <div>
      <div className="inline-flex">
        <TextDescription text={name} />
        <p>{typeof text === 'object' ? text.join(', ') : text}</p>
      </div>
    </div>
  );
}

export default DescriptionItems;
