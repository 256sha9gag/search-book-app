import React from 'react';

import SearchIcon from '../Icons/Search/SearchIcon';
import styles from './button.module.scss';

const Button = () => {
  return (
    <button className={styles.button}>
      <SearchIcon /> 
    </button>
  );
};

export default Button;
