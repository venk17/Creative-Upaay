import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Home, MessageSquare, CheckSquare, Users, Settings, ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import { toggleSidebar, setActiveProject } from '../redux/actions';

const Sidebar = () => {
  const { sidebarCollapsed, activeProject } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const menuItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: MessageSquare, label: 'Messages', id: 'messages' },
    { icon: CheckSquare, label: 'Tasks', id: 'tasks' },
    { icon: Users, label: 'Members', id: 'members' },
    { icon: Settings, label: 'Settings', id: 'settings' }
  ];

  const projects = [
    { name: 'Mobile App', color: 'bg-green-500', active: true },
    { name: 'Website Redesign', color: 'bg-orange-500', active: false },
    { name: 'Design System', color: 'bg-gray-400', active: false },
    { name: 'Wireframes', color: 'bg-blue-500', active: false }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-40 ${
      sidebarCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-gray-900">Project M.</span>
            </div>
          )}
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      <nav className="mt-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  item.id === 'tasks'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {!sidebarCollapsed && (
        <>
          <div className="mt-8 px-6">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              My Projects
            </h3>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <button
                    onClick={() => dispatch(setActiveProject(project.name))}
                    className={`flex items-center w-full text-left px-2 py-1 text-sm rounded-md transition-colors ${
                      activeProject === project.name
                        ? 'bg-gray-100 text-gray-900 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className={`w-2 h-2 ${project.color} rounded-full mr-3`}></div>
                    <span className="truncate">{project.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-yellow-800">Thoughts Time</h4>
                  <p className="text-xs text-yellow-600 mt-1">
                    We don't have any notice for you, till then you can share your thoughts with your peers.
                  </p>
                  <button className="text-xs text-yellow-700 font-medium mt-2 hover:text-yellow-800">
                    Write a message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;