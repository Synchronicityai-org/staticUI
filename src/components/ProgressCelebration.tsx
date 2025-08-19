import React from 'react';
import { Trophy, Star, Heart, TrendingUp } from 'lucide-react';

const ProgressCelebration: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Consistency Champion',
      description: 'You\'ve logged progress for 5 days in a row!',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      icon: Star,
      title: 'Small Wins Add Up',
      description: 'You\'ve celebrated 12 tiny victories this week',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Heart,
      title: 'Patient Parent',
      description: 'Your gentle approach is making a difference',
      color: 'from-rose-400 to-red-500',
      bgColor: 'from-rose-50 to-red-50'
    }
  ];

  const weeklyStats = [
    { label: 'Days Active', value: '6/7', color: 'text-green-600' },
    { label: 'Success Rate', value: '73%', color: 'text-blue-600' },
    { label: 'Strategies Tried', value: '4', color: 'text-purple-600' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
          <span className="text-3xl">🎉</span>
          <span>Celebrating Your Progress</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-6 border border-white/50`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/80 rounded-2xl p-6 border border-green-200">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>This Week's Summary</span>
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-3">
          <span className="text-2xl">💌</span>
          <span>A Message of Encouragement</span>
        </h3>
        <div className="bg-white/80 rounded-2xl p-6 border border-blue-200">
          <p className="text-gray-700 leading-relaxed mb-4">
            "Remember, parenting isn't about perfection—it's about connection, patience, and celebrating the small moments that matter. Every day you show up for your child is a victory worth celebrating."
          </p>
          <p className="text-blue-700 font-medium">
            You're doing better than you think. Keep going! 💙
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCelebration