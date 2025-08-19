import React from 'react';
import { 
  ClipboardList, 
  Clock, 
  PenTool, 
  Users, 
  MessageSquare, 
  TrendingUp 
} from 'lucide-react';

const ActionButtons: React.FC = () => {
  const actions = [
    {
      icon: ClipboardList,
      label: 'Intake Form',
      color: 'from-emerald-400 to-emerald-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    },
    {
      icon: Clock,
      label: 'View History',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      icon: PenTool,
      label: 'Share Story',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      icon: Users,
      label: 'Connect Parents',
      color: 'from-pink-400 to-pink-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700'
    },
    {
      icon: MessageSquare,
      label: 'Send Feedback',
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      icon: TrendingUp,
      label: 'Progress Report',
      color: 'from-indigo-400 to-indigo-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <button
            key={index}
            className={`${action.bgColor} hover:shadow-lg hover:scale-105 ${action.textColor} px-4 py-6 rounded-xl font-medium transition-all duration-200 flex flex-col items-center space-y-3 border border-white/50`}
          >
            <div className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center shadow-sm`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ActionButtons;