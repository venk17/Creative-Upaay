const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Brainstorming',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      status: 'todo',
      priority: 'Low',
      category: 'Design',
      assignees: [
        { id: 1, name: 'John Doe', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' },
        { id: 2, name: 'Jane Smith', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' },
        { id: 3, name: 'Bob Johnson', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' }
      ],
      comments: 12,
      files: 0,
      dueDate: '2025-01-20',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Research',
      description: 'User research helps you to create an optimal product for users.',
      status: 'todo',
      priority: 'High',
      category: 'Research',
      assignees: [
        { id: 4, name: 'Alice Wilson', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' },
        { id: 5, name: 'Charlie Brown', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' }
      ],
      comments: 10,
      files: 3,
      dueDate: '2025-01-15',
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      title: 'Wireframes',
      description: 'Low fidelity wireframes include the most basic content and visuals.',
      status: 'todo',
      priority: 'High',
      category: 'Design',
      assignees: [
        { id: 6, name: 'Diana Prince', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' },
        { id: 7, name: 'Eva Green', avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' }
      ],
      comments: 12,
      files: 15,
      dueDate: '2025-01-25',
      createdAt: new Date().toISOString()
    },
    {
      id: 4,
      title: 'Brainstorming',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      status: 'progress',
      priority: 'Low',
      category: 'Development',
      assignees: [
        { id: 8, name: 'Frank Miller', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' },
        { id: 9, name: 'Grace Kelly', avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' }
      ],
      comments: 12,
      files: 0,
      dueDate: '2025-01-30',
      createdAt: new Date().toISOString()
    },
    {
      id: 5,
      title: 'Brainstorming',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      status: 'progress',
      priority: 'Low',
      category: 'Design',
      assignees: [
        { id: 10, name: 'Henry Ford', avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' },
        { id: 11, name: 'Ivy Adams', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' }
      ],
      comments: 12,
      files: 0,
      dueDate: '2025-02-05',
      createdAt: new Date().toISOString()
    },
    {
      id: 6,
      title: 'Brainstorming',
      description: 'Brainstorming brings team members\' diverse experience into play.',
      status: 'done',
      priority: 'Low',
      category: 'Testing',
      assignees: [
        { id: 12, name: 'Jack Black', avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' },
        { id: 13, name: 'Kate White', avatar: 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' }
      ],
      comments: 12,
      files: 0,
      dueDate: '2025-01-10',
      createdAt: new Date().toISOString()
    },
    {
      id: 7,
      title: 'Design System',
      description: 'It just needs to adapt the UI from what you did before.',
      status: 'done',
      priority: 'Completed',
      category: 'Design',
      assignees: [
        { id: 14, name: 'Leo Stone', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' },
        { id: 15, name: 'Mia Davis', avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2' }
      ],
      comments: 12,
      files: 15,
      dueDate: '2025-01-08',
      createdAt: new Date().toISOString()
    }
  ],
  nextId: 8
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, id: state.nextId }],
        nextId: state.nextId + 1
      };
    
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        )
      };
    
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    
    case 'MOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.taskId
            ? { ...task, status: action.payload.newStatus }
            : task
        )
      };
    
    case 'REORDER_TASKS':
      return {
        ...state,
        tasks: action.payload
      };
    
    default:
      return state;
  }
};

export default tasksReducer;