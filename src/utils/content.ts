type Content = {
  en: {
    title: string,
    categories: string,
    sortingBy: string,
    categoriesList: string[],
    sortingByList: string[],
    placeholder: string,
    searchResult: (count: number) => string,
  }
};

const content: Content = {
  en: {
    title: 'Search for books',
    categories: 'Categories',
    sortingBy: 'Sorting by',
    categoriesList: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
    sortingByList: ['relevance', 'newest'],
    placeholder: 'Search...',
    searchResult: (count: number) => `Found ${count} results`,
  },
};

export default content;
