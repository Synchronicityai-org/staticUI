import React, { useState } from 'react';
import { ChevronRight, Play, ExternalLink, Award, Sparkles, PartyPopper } from 'lucide-react';
import SuccessSlider from './SuccessSlider';
import FullScreenConfetti from './FullScreenConfetti';

const MilestoneDetail: React.FC = () => {
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>('routine-building');
  const [dayProgress, setDayProgress] = useState<{ [key: string]: number }>({
    1: 6, 2: 7, 3: 8, 4: 9, 5: 8, 6: 9, 7: 10, 8: 8, 9: 9, 10: 8
  });

  const updateDayProgress = (day: number, value: number) => {
    setDayProgress(prev => ({ ...prev, [day]: value }));
  };

  const getConsecutiveHighDays = () => {
    let consecutive = 0;
    for (let i = 1; i <= 10; i++) {
      if (dayProgress[i] >= 8) {
        consecutive++;
      } else {
        consecutive = 0;
      }
    }
    return consecutive;
  };

  const consecutiveHighDays = getConsecutiveHighDays();
  const shouldShowCelebration = consecutiveHighDays >= 3;

  const getAllDaysComplete = () => {
    for (let i = 1; i <= 10; i++) {
      if (dayProgress[i] < 8) return false;
    }
    return true;
  };

  const isGoalAchieved = getAllDaysComplete();

  const strategies = [
    {
      id: 'routine-building',
      title: 'Building a Consistent Routine',
      description: 'Establishing regular potty times helps your child develop healthy habits and reduces accidents.',
      examples: [
        'Set potty times every 2 hours during the day',
        'Use a visual schedule with pictures',
        'Celebrate small wins with stickers or praise'
      ],
      videoLink: 'https://example.com/potty-routine-video',
      dayPlan: Array.from({ length: 10 }, (_, i) => ({ day: i + 1 }))
    },
    {
      id: 'positive-reinforcement',
      title: 'Positive Reinforcement Techniques',
      description: 'Encouraging your child with praise and rewards builds confidence and motivation.',
      examples: [
        'Use a potty chart with fun stickers',
        'Offer verbal praise for attempts, not just successes',
        'Create a special potty song or dance'
      ],
      videoLink: 'https://example.com/positive-reinforcement-video',
      dayPlan: Array.from({ length: 7 }, (_, i) => ({ day: i + 1 }))
    }
  ];

  return (
    <div className="mb-8">
      {isGoalAchieved && <FullScreenConfetti />}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              🚽
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Potty Training Journey</h2>
              <p className="text-gray-600">Let's take this one step at a time 💪</p>
            </div>
          </div>
          
          {shouldShowCelebration && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-bold text-green-800">Amazing streak! 🎉</p>
                <p className="text-sm text-green-700">+15 TinyBucks earned!</p>
              </div>
            </div>
          )}
          
          {isGoalAchieved && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 flex items-center space-x-3">
              <PartyPopper className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-bold text-green-800">🏆 GOAL ACHIEVED! 🏆</p>
                <p className="text-sm text-green-700">+50 TinyBucks bonus earned!</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {strategies.map((strategy) => (
            <div key={strategy.id} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setExpandedStrategy(
                  expandedStrategy === strategy.id ? null : strategy.id
                )}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                  expandedStrategy === strategy.id ? 'rotate-90' : ''
                }`} />
              </button>

              {expandedStrategy === strategy.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <span>💡</span>
                        <span>Helpful Examples</span>
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {strategy.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={strategy.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl font-medium hover:shadow-lg transition-all"
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch Helpful Video</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <span>📅</span>
                        <span>Daily Progress Tracker</span>
                      </h4>
                      <div className="bg-white rounded-2xl p-4 border border-gray-200">
                        <div className="space-y-3">
                          {strategy.dayPlan.map((dayData) => {
                            const progress = dayProgress[dayData.day] || 0;
                            const earnedBucks = progress >= 8;
                            return (
                              <div key={dayData.day} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <span className="font-medium text-gray-700 w-12">Day {dayData.day}</span>
                                  {earnedBucks && (
                                    <div className="flex items-center space-x-1 text-yellow-600">
                                      <Award className="w-4 h-4" />
                                      <span className="text-xs font-bold">+3 TB</span>
                                    </div>
                                  )}
                                </div>
                                <SuccessSlider
                                  value={progress}
                                  onChange={(value) => updateDayProgress(dayData.day, value)}
                                />
                              </div>
                            );
                          })}
                        </div>
                        
                        {consecutiveHighDays >= 3 && (
                          <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                            <p className="text-yellow-800 font-medium text-sm">
                              🎉 {consecutiveHighDays} days of great progress! Keep it up!
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MilestoneDetail;