import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, Calendar, Share, Grid3X3, UserPlus, Filter } from 'lucide-react';
import { showTaskForm } from '../redux/actions';
import FilterBar from './FilterBar';

const Header = () => {
  const { activeProject } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const teamMembers = [
    { id: 1, name: 'John', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2' },
    { id: 2, name: 'Jane', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2' },
    { id: 3, name: 'Bob', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2' },
    { id: 4, name: 'Alice', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2' }
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">{activeProject}</h1>
          <div className="flex items-center space-x-2">
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center px-3 py-2 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
            <UserPlus className="w-4 h-4 mr-2" />
            Invite
          </button>
          
          <div className="flex items-center -space-x-2">
            {teamMembers.map((member) => (
              <img
                key={member.id}
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full border-2 border-white hover:z-10 transition-all duration-200 hover:scale-110"
              />
            ))}
            <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
              +2
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <FilterBar />
        
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Share className="w-4 h-4 mr-2" />
            Share
          </button>
          
          <button
            onClick={() => dispatch(showTaskForm())}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Today</span>
        </div>
      </div>
    </div>
  );
};

export default Header;