import React, { useState, useEffect } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import './DropdownSearchResults.scss';

const DropdownSearchResults = (props) => {
  const { list, toggleItem, selectTitle, idx, toggleList, idxActived, title } = props;
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="dd-header-title">{selectTitle || 'ALL'}</div>
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
            ALL
          </li>
          {list.map((item, id) => (
            <li
              className="dd-list-item"
              key={id}
              onClick={() => {
                toggleItem(item);
                toggleList(idx);
              }}
            >
              {item.name || item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSearchResults;
