import React, { useState } from 'react';

import styles from './header.module.scss';
import Selector from '../UI/Selector/Selector';
import Search from '../UI/Search/Search';
import content from '../../utils/content';

const Header = () => {
  const [categories, setCategories] = useState('all');
  const [sortingBy, setSortingBy] = useState('relevance');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSortedByOpen, setIsSortedByOpen] = useState(false);


  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {content.en.title}
      </h1>
      <Search />
      <div className={styles.selectorsWrapper}>
        <Selector
          content={content.en.categoriesList}
          uniqId='categories'
          label={content.en.categories}
          value={categories}
          setFunc={setCategories}
          isShow={isCategoriesOpen}
          setIsShow={setIsCategoriesOpen}
        />
        <Selector
          content={content.en.sortingByList}
          uniqId='sortingBy'
          label={content.en.sortingBy}
          value={sortingBy}
          setFunc={setSortingBy}
          isShow={isSortedByOpen}
          setIsShow={setIsSortedByOpen}
        />
      </div>
    </header>
  );
};

export default Header;