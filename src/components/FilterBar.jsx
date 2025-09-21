import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Filter, Calendar } from 'lucide-react';
import { setPriorityFilter, setCategoryFilter, setDateFilter, resetFilters } from '../redux/actions';

const FilterBar = () => {
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const priorityOptions = [
    { value: 'all', label: 'All Priorities' },
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'Design', label: 'Design' },
    { value: 'Development', label: 'Development' },
    { value: 'Research', label: 'Research' },
    { value: 'Testing', label: 'Testing' }
  ];

  const dateOptions = [
    { value: 'all', label: 'All Dates' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'overdue', label: 'Overdue' }
  ];

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2">
        <Filter className="w-4 h-4 text-gray-500" />
        <select
          value={filters.priority}
          onChange={(e) => dispatch(setPriorityFilter(e.target.value))}
          className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {priorityOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <select
        value={filters.category}
        onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
        className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        {categoryOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="flex items-center space-x-2">
        <Calendar className="w-4 h-4 text-gray-500" />
        <select
          value={filters.dateFilter}
          onChange={(e) => dispatch(setDateFilter(e.target.value))}
          className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {dateOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {(filters.priority !== 'all' || filters.category !== 'all' || filters.dateFilter !== 'all') && (
        <button
          onClick={() => dispatch(resetFilters())}
          className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default FilterBar;