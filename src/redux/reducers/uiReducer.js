const initialState = {
  sidebarCollapsed: false,
  activeProject: 'Mobile App',
  showTaskForm: false,
  editingTask: null,
  darkMode: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    
    case 'SET_ACTIVE_PROJECT':
      return { ...state, activeProject: action.payload };
    
    case 'SHOW_TASK_FORM':
      return { ...state, showTaskForm: true, editingTask: null };
    
    case 'HIDE_TASK_FORM':
      return { ...state, showTaskForm: false, editingTask: null };
    
    case 'EDIT_TASK':
      return { ...state, showTaskForm: true, editingTask: action.payload };
    
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    
    default:
      return state;
  }
};

export default uiReducer;