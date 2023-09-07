import React, { useState } from 'react';

import Button from '../Button/Button';
import styled from './search.module.scss'
import content from '../../../utils/content';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styled.wrapper}>
      <label className={styled.label}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styled.input}
          placeholder={content.en.placeholder}
        />
        <Button /> 
      </label>
    </div>
  );
};

export default Search;
