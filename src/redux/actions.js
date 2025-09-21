// Task Actions
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    ...task,
    createdAt: new Date().toISOString(),
    assignees: task.assignees || [],
    comments: 0,
    files: 0
  }
});

export const updateTask = (task) => ({
  type: 'UPDATE_TASK',
  payload: task
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId
});

export const moveTask = (taskId, newStatus) => ({
  type: 'MOVE_TASK',
  payload: { taskId, newStatus }
});

export const reorderTasks = (tasks) => ({
  type: 'REORDER_TASKS',
  payload: tasks
});

// Filter Actions
export const setPriorityFilter = (priority) => ({
  type: 'SET_PRIORITY_FILTER',
  payload: priority
});

export const setCategoryFilter = (category) => ({
  type: 'SET_CATEGORY_FILTER',
  payload: category
});

export const setDateFilter = (dateFilter) => ({
  type: 'SET_DATE_FILTER',
  payload: dateFilter
});

export const setSearchQuery = (query) => ({
  type: 'SET_SEARCH_QUERY',
  payload: query
});

export const resetFilters = () => ({
  type: 'RESET_FILTERS'
});

// UI Actions
export const toggleSidebar = () => ({
  type: 'TOGGLE_SIDEBAR'
});

export const setActiveProject = (project) => ({
  type: 'SET_ACTIVE_PROJECT',
  payload: project
});

export const showTaskForm = () => ({
  type: 'SHOW_TASK_FORM'
});

export const hideTaskForm = () => ({
  type: 'HIDE_TASK_FORM'
});

export const editTask = (task) => ({
  type: 'EDIT_TASK',
  payload: task
});

export const toggleDarkMode = () => ({
  type: 'TOGGLE_DARK_MODE'
});