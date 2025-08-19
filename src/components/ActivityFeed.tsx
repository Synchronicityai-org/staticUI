import React from 'react';
import { Zap, CheckCircle2, TrendingUp, MessageCircle } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'milestone',
      title: 'Sensory Exploration Milestone',
      description: 'Your child successfully completed the texture exploration activity',
      time: '2 hours ago',
      status: 'completed',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 2,
      type: 'activity',
      title: 'Daily Routine',
      description: 'Morning sensory play session scheduled for 10:00 AM',
      time: '4 hours ago',
      status: 'scheduled',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      type: 'progress',
      title: 'Weekly Progress Update',
      description: 'Your child has shown improvement in motor skills development',
      time: '1 day ago',
      status: 'info',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      type: 'support',
      title: 'Support Team Message',
      description: 'Dr. Sarah shared new resources for sensory development',
      time: '2 days ago',
      status: 'message',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'scheduled':
        return <Zap className="w-5 h-5" />;
      case 'info':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <MessageCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-sm">
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center`}>
                <div className={activity.iconColor}>
                  {getStatusIcon(activity.status)}
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="mb-2">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
              </div>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;