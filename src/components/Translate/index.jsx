import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Dots } from '../SvgIcons';
import Dropdown from '../Dropdown';

function Translate() {
  const { t } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18next.changeLanguage(language);
  };

  return (
    <Dropdown
      outElement={<Dots />}
      insideElement={
        <>
          <button
            onClick={() => handleChangeLanguage('es')}
            className="block w-32 px-4 py-2 text-sm text-left text-gray-700 hover:bg-green-900 hover:text-white"
            itemID="testeo"
          >
            🇪🇸{t('general.language_es')}
          </button>

          <button
            onClick={() => handleChangeLanguage('en')}
            className="block w-32 px-4 py-2 text-sm  text-left text-gray-700 hover:bg-green-900 hover:text-white "
          >
            🇺🇸{t('general.language_en')}
          </button>
        </>
      }
    />
  );
}

export default Translate;
