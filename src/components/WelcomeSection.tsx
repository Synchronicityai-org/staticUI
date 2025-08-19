import React from 'react';
import { Sun, Moon, Coffee } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { greeting: 'Good morning', icon: Sun, color: 'text-yellow-600' };
    if (hour < 17) return { greeting: 'Good afternoon', icon: Coffee, color: 'text-orange-600' };
    return { greeting: 'Good evening', icon: Moon, color: 'text-indigo-600' };
  };

  const { greeting, icon: TimeIcon, color } = getTimeOfDay();

  return (
    <div className="mb-6">
      <div className="flex items-center space-x-3 mb-4">
        <TimeIcon className={`w-8 h-8 ${color}`} />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {greeting}, Sarah! 🌟
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to celebrate some tiny wins today?
          </p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-orange-100 to-rose-100 rounded-2xl p-4 border border-orange-200">
        <p className="text-orange-800 font-medium mb-2">✨ Today's Inspiration</p>
        <p className="text-orange-700 leading-relaxed">
          "Progress isn't always about big leaps forward. Sometimes it's about the small, consistent steps that build confidence and create lasting change."
        </p>
      </div>
    </div>
  );
};
export default WelcomeSection;