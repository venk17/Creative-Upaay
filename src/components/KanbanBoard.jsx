import React from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import KanbanColumn from './KanbanColumn';
import { useDispatch } from 'react-redux';
import { moveTask, reorderTasks } from '../redux/actions';

const KanbanBoard = () => {
  const { tasks } = useSelector(state => state.tasks);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  // Filter tasks based on current filters
  const filterTasks = (tasks) => {
    return tasks.filter(task => {
      // Priority filter
      if (filters.priority !== 'all' && task.priority !== filters.priority) {
        return false;
      }
      
      // Category filter
      if (filters.category !== 'all' && task.category !== filters.category) {
        return false;
      }
      
      // Date filter
      if (filters.dateFilter !== 'all') {
        const taskDate = new Date(task.dueDate);
        const today = new Date();
        const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        
        switch (filters.dateFilter) {
          case 'today':
            if (taskDate.toDateString() !== today.toDateString()) {
              return false;
            }
            break;
          case 'week':
            if (taskDate < today || taskDate > oneWeekFromNow) {
              return false;
            }
            break;
          case 'overdue':
            if (taskDate >= today) {
              return false;
            }
            break;
          default:
            break;
        }
      }
      
      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        if (!task.title.toLowerCase().includes(query) && 
            !task.description.toLowerCase().includes(query)) {
          return false;
        }
      }
      
      return true;
    });
  };

  const filteredTasks = filterTasks(tasks);

  const todoTasks = filteredTasks.filter(task => task.status === 'todo');
  const progressTasks = filteredTasks.filter(task => task.status === 'progress');
  const doneTasks = filteredTasks.filter(task => task.status === 'done');

  const columns = [
    {
      id: 'todo',
      title: 'To Do',
      tasks: todoTasks,
      color: 'border-indigo-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      id: 'progress',
      title: 'On Progress',
      tasks: progressTasks,
      color: 'border-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      id: 'done',
      title: 'Done',
      tasks: doneTasks,
      color: 'border-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    }
  ];

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    const taskId = parseInt(draggableId);

    if (source.droppableId !== destination.droppableId) {
      // Move task between columns
      const statusMap = {
        'todo': 'todo',
        'progress': 'progress',
        'done': 'done'
      };
      dispatch(moveTask(taskId, statusMap[destination.droppableId]));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {columns.map((column) => (
          <KanbanColumn key={column.id} column={column} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;