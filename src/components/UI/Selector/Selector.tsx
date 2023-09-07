import React, { useEffect, useRef } from 'react';

import styles from './selector.module.scss'
import ChevronDown from '../Icons/Chevron/ChevronDown';
import ChevronUp from '../Icons/Chevron/ChevronUp';
import generateId from '../../../utils/generateId';

type SelectorProps = {
  label: string;
  uniqId: string;
  value: string;
  setFunc: React.Dispatch<React.SetStateAction<string>>;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  content: string[];
}

const Selector: React.FC<SelectorProps> = ({ label, uniqId, value, setFunc, isShow, setIsShow, content }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsShow]);


  return (
    <div className={styles.selector}>
      <label
        className={styles.label}
        htmlFor={uniqId}
      >
        {label}
      </label>
      <div 
        className={styles.inputWrapper}
        ref={wrapperRef}
        onClick={() => setIsShow(!isShow)}
      >
        <input 
          className={styles.input}
          id={uniqId}
          name={uniqId}
          readOnly={true}
          value={value}
          />
        {isShow ? <ChevronUp /> : <ChevronDown />}
        {isShow ? (
          <ul
            className={styles.dropdown}
          >
            {content.map((item: string) => (
              <li
                className={styles.dropdownItem}
                key={generateId()}
                onClick={() => setFunc(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Selector;
