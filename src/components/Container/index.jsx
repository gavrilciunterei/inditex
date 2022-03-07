import React from 'react';

function Container({ children }) {
  return (
    <div className="container lg:px-24 sm:px-10 py-6 mx-auto flex flex-col">
      {children}
    </div>
  );
}

export default Container;
