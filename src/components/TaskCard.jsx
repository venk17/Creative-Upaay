import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { MessageSquare, Paperclip, MoreHorizontal, Calendar } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../redux/actions';

const TaskCard = ({ task, index }) => {
  const dispatch = useDispatch();

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isOverdue = (dateString) => {
    const dueDate = new Date(dateString);
    const today = new Date();
    return dueDate < today && task.status !== 'done';
  };

  const handleEdit = () => {
    dispatch(editTask(task));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task.id));
    }
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-all duration-200 ${
            snapshot.isDragging ? 'shadow-lg rotate-3' : ''
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded border ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <div className="relative group">
              <button className="p-1 rounded-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </button>
              <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <button
                  onClick={handleEdit}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{task.title}</h4>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{task.description}</p>

          {task.dueDate && (
            <div className={`flex items-center text-xs mb-3 ${
              isOverdue(task.dueDate) ? 'text-red-600' : 'text-gray-500'
            }`}>
              <Calendar className="w-3 h-3 mr-1" />
              <span>Due {formatDate(task.dueDate)}</span>
              {isOverdue(task.dueDate) && <span className="ml-1">(Overdue)</span>}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center -space-x-2">
              {task.assignees.slice(0, 3).map((assignee) => (
                <img
                  key={assignee.id}
                  src={assignee.avatar}
                  alt={assignee.name}
                  className="w-6 h-6 rounded-full border-2 border-white"
                  title={assignee.name}
                />
              ))}
              {task.assignees.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-gray-600 font-medium">
                    +{task.assignees.length - 3}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-3 text-gray-500">
              {task.comments > 0 && (
                <div className="flex items-center space-x-1">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-xs">{task.comments}</span>
                </div>
              )}
              {task.files > 0 && (
                <div className="flex items-center space-x-1">
                  <Paperclip className="w-4 h-4" />
                  <span className="text-xs">{task.files}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;