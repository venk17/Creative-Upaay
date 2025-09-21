import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Plus } from 'lucide-react';
import TaskCard from './TaskCard';
import { useDispatch } from 'react-redux';
import { showTaskForm } from '../redux/actions';

const KanbanColumn = ({ column }) => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(showTaskForm());
  };

  return (
    <div className="flex flex-col h-full">
      <div className={`flex items-center justify-between p-4 rounded-t-lg border-t-4 ${column.color} ${column.bgColor}`}>
        <div className="flex items-center space-x-2">
          <h3 className={`font-semibold ${column.textColor}`}>{column.title}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${column.bgColor} ${column.textColor} bg-opacity-50`}>
            {column.tasks.length}
          </span>
        </div>
        <button
          onClick={handleAddTask}
          className={`p-1 rounded-md hover:bg-white hover:bg-opacity-50 transition-colors ${column.textColor}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex-1 p-4 space-y-4 bg-gray-50 min-h-96 transition-colors ${
              snapshot.isDraggingOver ? 'bg-gray-100' : ''
            }`}
          >
            {column.tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
            
            {column.tasks.length === 0 && (
              <div className="text-center py-8">
                <div className="text-gray-400 text-sm">No tasks in this column</div>
                <button
                  onClick={handleAddTask}
                  className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  Add your first task
                </button>
              </div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumn;