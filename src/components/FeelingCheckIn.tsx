import React, { useState } from 'react';
import { Smile, Meh, Frown, Heart, Coffee, Zap } from 'lucide-react';

const FeelingCheckIn: React.FC = () => {
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);
  const [selectedEnergy, setSelectedEnergy] = useState<string | null>(null);

  const feelings = [
    { id: 'great', label: 'Great', icon: Smile, color: 'bg-green-100 text-green-700 border-green-200' },
    { id: 'okay', label: 'Okay', icon: Meh, color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { id: 'tough', label: 'Tough Day', icon: Frown, color: 'bg-orange-100 text-orange-700 border-orange-200' },
    { id: 'overwhelmed', label: 'Overwhelmed', icon: Heart, color: 'bg-rose-100 text-rose-700 border-rose-200' }
  ];

  const energyLevels = [
    { id: 'high', label: 'Energized', icon: Zap, color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { id: 'medium', label: 'Steady', icon: Coffee, color: 'bg-amber-100 text-amber-700 border-amber-200' },
    { id: 'low', label: 'Need Rest', icon: Heart, color: 'bg-purple-100 text-purple-700 border-purple-200' }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-orange-100 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
        <span className="text-3xl">💝</span>
        <span>How are you feeling today?</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Your mood today</h3>
          <div className="grid grid-cols-2 gap-3">
            {feelings.map((feeling) => {
              const Icon = feeling.icon;
              const isSelected = selectedFeeling === feeling.id;
              return (
                <button
                  key={feeling.id}
                  onClick={() => setSelectedFeeling(feeling.id)}
                  className={`p-3 rounded-2xl border-2 transition-all duration-200 ${
                    isSelected 
                      ? `${feeling.color} shadow-lg scale-105` 
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{feeling.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Your energy level</h3>
          <div className="space-y-3">
            {energyLevels.map((energy) => {
              const Icon = energy.icon;
              const isSelected = selectedEnergy === energy.id;
              return (
                <button
                  key={energy.id}
                  onClick={() => setSelectedEnergy(energy.id)}
                  className={`w-full p-3 rounded-2xl border-2 transition-all duration-200 flex items-center space-x-3 ${
                    isSelected 
                      ? `${energy.color} shadow-lg` 
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{energy.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {(selectedFeeling || selectedEnergy) && (
        <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
          <p className="text-green-800 font-medium">
            Thank you for sharing! Remember, every feeling is valid, and you're doing your best. 💚
          </p>
        </div>
      )}
    </div>
  );
};

export default FeelingCheckIn