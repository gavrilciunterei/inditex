import React, { useEffect, useRef, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function Dropdown() {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleChangeLanguage = (language) => {
    i18next.changeLanguage(language);
    setOpenModal(false);
  };

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
      <button
        className="block p-2  bg-gray-100 rounded-md"
        onClick={() => setOpenModal(!openModal)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-green-900 hover:text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </button>

      <div
        className={`${
          !openModal && 'hidden'
        } absolute right-0 w-32 py-2 mt-2 bg-gray-100 rounded-md shadow-xl`}
      >
        <button
          onClick={() => handleChangeLanguage('es')}
          className="block w-32 px-4 py-2 text-sm text-left text-gray-700 hover:bg-green-900 hover:text-white "
        >
          🇪🇸 {t('general.language_es')}
        </button>

        <button
          onClick={() => handleChangeLanguage('en')}
          className="block w-32 px-4 py-2 text-sm  text-left text-gray-700 hover:bg-green-900 hover:text-white "
        >
          🇺🇸 {t('general.language_en')}
        </button>
      </div>
    </div>
  );
}

export default Dropdown;
