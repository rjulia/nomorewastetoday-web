import React, { useState, useEffect } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import './DropdownSearchResults.scss';
import { useTranslation } from 'react-i18next';

const DropdownSearchResults = (props) => {
  const { list, toggleItem, selectTitle, idx, toggleList, idxActived, title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (idx === idxActived) {
      setIsOpen((isOpen) => !isOpen);
    } else {
      setIsOpen(false);
    }
  }, [idxActived, idx]);

  return (
    <div className="dd-wrapper">
      <span className="dd-label">{title}</span>
      <div className="dd-header" onClick={() => toggleList(idx)}>
        <div className="dd-header-title">{t(selectTitle)}</div>
        {isOpen ? <FaAngleUp size="10" /> : <FaAngleDown size="10" />}
      </div>
      {isOpen && (
        <ul className="dd-list">
          <li
            className="dd-list-item"
            onClick={() => {
              toggleItem('ALL');
              toggleList(idx);
            }}
          >
            {t('home.search.type.all')}
          </li>
          {list.map((item) => (
            <li
              className="dd-list-item"
              key={item.value}
              onClick={() => {
                toggleItem(item);
                toggleList(idx);
              }}
            >
              {t(item.key)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSearchResults;
