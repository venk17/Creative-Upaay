import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import KanbanBoard from '../components/KanbanBoard';
import TaskForm from '../components/TaskForm';
import { hideTaskForm } from '../redux/actions';

const Dashboard = () => {
  const { sidebarCollapsed, showTaskForm, darkMode } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  return (
    <div className={`min-h-screen bg-gray-50 ${darkMode ? 'dark' : ''}`}>
      <div className="flex">
        <Sidebar />
        <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          <Header />
          <main className="p-6">
            <KanbanBoard />
          </main>
        </div>
      </div>
      
      {showTaskForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <TaskForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;