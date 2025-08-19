import React from 'react';
import { TrendingUp, TrendingDown, Minus, Target, CheckCircle2, BarChart3, Trophy } from 'lucide-react';

const MetricCards: React.FC = () => {
  const metrics = [
    {
      title: 'Total Activities',
      value: '24',
      change: '+12%',
      trend: 'up',
      color: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
      textColor: 'text-red-700',
      icon: Target
    },
    {
      title: 'Completed Today',
      value: '8',
      change: '+5%',
      trend: 'up',
      color: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
      textColor: 'text-green-700',
      icon: CheckCircle2
    },
    {
      title: 'Weekly Progress',
      value: '85%',
      change: '+8%',
      trend: 'up',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
      textColor: 'text-blue-700',
      icon: BarChart3
    },
    {
      title: 'Milestones Reached',
      value: '12',
      change: '0%',
      trend: 'neutral',
      color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
      textColor: 'text-purple-700',
      icon: Trophy
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`${metric.color} border rounded-2xl p-6 transition-all hover:shadow-lg hover:scale-105 duration-200`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="p-2 rounded-xl bg-white/50">
              <metric.icon className={`w-5 h-5 ${metric.textColor}`} />
            </div>
            <div className="flex items-center space-x-1">
              {getTrendIcon(metric.trend)}
              <span className="text-xs font-medium text-gray-500">{metric.change}</span>
            </div>
          </div>
          <div>
            <p className={`text-3xl font-bold ${metric.textColor} mb-1`}>
              {metric.value}
            </p>
            <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricCards;