import React, { useState } from 'react';
import { Plus, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { useFocusAreas } from '../contexts/FocusAreaContext';
import SuccessSlider from './SuccessSlider';

const FocusAreaCards: React.FC = () => {
  const { focusAreas, addFocusArea, updateSuccessRate } = useFocusAreas();
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>(null);

  const availableAreas = [
    { id: 'sleep-routine', title: 'Sleep Routine', icon: '🌙', color: 'from-indigo-400 to-purple-500' },
    { id: 'eating-habits', title: 'Healthy Eating', icon: '🥕', color: 'from-green-400 to-emerald-500' },
    { id: 'social-skills', title: 'Social Skills', icon: '👫', color: 'from-pink-400 to-rose-500' },
    { id: 'emotional-regulation', title: 'Emotional Regulation', icon: '🧘', color: 'from-blue-400 to-cyan-500' }
  ];

  const handleAddFocusArea = (areaTemplate: any) => {
    const newArea = {
      ...areaTemplate,
      strategies: [
        {
          id: `${areaTemplate.id}-strategy-1`,
          title: 'Getting Started',
          description: 'Begin your journey with gentle, consistent approaches.',
          examples: ['Start with small steps', 'Be patient and consistent', 'Celebrate every attempt'],
          videoLink: 'https://example.com/video',
          dayPlan: Array.from({ length: 7 }, (_, i) => ({ day: i + 1, successRate: 0 }))
        }
      ]
    };
    addFocusArea(newArea);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-3">
          <span className="text-3xl">🎯</span>
          <span>Your Focus Areas</span>
        </h2>
      </div>

      <div className="grid gap-6">
        {focusAreas.map((area) => (
          <div key={area.id} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                {area.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{area.title}</h3>
                <p className="text-gray-600">Let's take this one step at a time 💪</p>
              </div>
            </div>

            <div className="space-y-6">
              {area.strategies.map((strategy) => (
                <div key={strategy.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setExpandedStrategy(
                      expandedStrategy === strategy.id ? null : strategy.id
                    )}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{strategy.title}</h4>
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
                          <h5 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                            <span>💡</span>
                            <span>Helpful Examples</span>
                          </h5>
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
                          <h5 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                            <span>📅</span>
                            <span>Daily Progress Tracker</span>
                          </h5>
                          <div className="bg-white rounded-2xl p-4 border border-gray-200">
                            <div className="space-y-3">
                              {strategy.dayPlan.map((dayData) => (
                                <div key={dayData.day} className="flex items-center justify-between">
                                  <span className="font-medium text-gray-700">Day {dayData.day}</span>
                                  <SuccessSlider
                                    value={dayData.successRate}
                                    onChange={(value) => updateSuccessRate(area.id, strategy.id, dayData.day, value)}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-3xl p-8 border-2 border-dashed border-orange-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-3">
            <Plus className="w-6 h-6 text-orange-600" />
            <span>Add a New Focus Area</span>
          </h3>
          <p className="text-gray-600 mb-6">Choose an area you'd like to work on with your child:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {availableAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => handleAddFocusArea(area)}
                className="p-4 bg-white rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-200 flex items-center space-x-3 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center text-xl shadow-md`}>
                  {area.icon}
                </div>
                <span className="font-medium text-gray-800">{area.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusAreaCards