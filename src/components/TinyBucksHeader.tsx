import React from 'react';
import { Coins, Trophy, Star, Gift } from 'lucide-react';

const TinyBucksHeader: React.FC = () => {
  const totalBucks = 247;
  const weeklyEarned = 35;
  const streak = 5;

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-6 mb-8 border border-yellow-200 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Coins className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
              <span>TinyBucks Balance</span>
              <span className="text-yellow-600">{totalBucks}</span>
            </h2>
            <p className="text-gray-600">Earned {weeklyEarned} this week • {streak} day streak! 🔥</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-2">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-gray-600 font-medium">Milestones</p>
            <p className="text-lg font-bold text-green-600">12</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-2">
              <Star className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-gray-600 font-medium">Perfect Days</p>
            <p className="text-lg font-bold text-purple-600">8</p>
          </div>
          
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
            <Gift className="w-5 h-5" />
            <span>Redeem Rewards</span>
          </button>
        </div>
      </div>
      
      <div className="mt-4 bg-white/80 rounded-2xl p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress to next reward</span>
          <span className="text-sm text-gray-500">53/100 TinyBucks</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-300" style={{ width: '53%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TinyBucksHeader;