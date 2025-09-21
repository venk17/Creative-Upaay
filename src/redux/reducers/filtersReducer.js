const initialState = {
  priority: 'all',
  category: 'all',
  dateFilter: 'all',
  searchQuery: ''
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRIORITY_FILTER':
      return { ...state, priority: action.payload };
    
    case 'SET_CATEGORY_FILTER':
      return { ...state, category: action.payload };
    
    case 'SET_DATE_FILTER':
      return { ...state, dateFilter: action.payload };
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'RESET_FILTERS':
      return initialState;
    
    default:
      return state;
  }
};

export default filtersReducer;