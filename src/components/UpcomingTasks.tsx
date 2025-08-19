import React from 'react';
import { Zap, CalendarDays, Trophy, Clock } from 'lucide-react';

const UpcomingTasks: React.FC = () => {
  const tasks = [
    {
      id: 1,
      title: 'Sensory Play Time',
      time: '10:00 AM',
      type: 'activity',
      priority: 'high',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Progress Check-in',
      time: '2:00 PM',
      type: 'milestone',
      priority: 'medium',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Story Reading',
      time: '4:00 PM',
      type: 'activity',
      priority: 'low',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      title: 'Weekly Review',
      time: 'Tomorrow',
      type: 'review',
      priority: 'medium',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'activity':
        return <Zap className="w-5 h-5" />;
      case 'milestone':
        return <Trophy className="w-5 h-5" />;
      default:
        return <CalendarDays className="w-5 h-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      default:
        return 'border-l-green-500';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Upcoming Tasks</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-sm border-l-4 ${getPriorityColor(task.priority)}`}
          >
            <div className={`flex-shrink-0 w-10 h-10 ${task.color} rounded-lg flex items-center justify-center`}>
              <div className={task.iconColor}>
                {getTypeIcon(task.type)}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {task.title}
              </h3>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <p className="text-sm text-gray-500">{task.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 text-sm text-blue-600 hover:text-blue-700 font-medium py-3 hover:bg-blue-50 rounded-xl transition-colors border border-blue-200 hover:border-blue-300">
        + Add New Task
      </button>
    </div>
  );
};

export default UpcomingTasks;