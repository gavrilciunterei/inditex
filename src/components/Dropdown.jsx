import React, { useEffect, useRef, useState } from 'react';

function Dropdown({ outElement, insideElement }) {
  const [openModal, setOpenModal] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenModal(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div className="relative" ref={wrapperRef}>
      <button className=" p-2" onClick={() => setOpenModal(!openModal)}>
        {outElement}
      </button>

      <div
        className={`${
          !openModal && 'hidden'
        } absolute right-0  py-2 mt-2 bg-gray-100 rounded-md shadow-xl`}
      >
        {insideElement}
      </div>
    </div>
  );
}

export default Dropdown;
