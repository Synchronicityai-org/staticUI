import React from 'react';
import { MessageCircle, ExternalLink, BookOpen } from 'lucide-react';

const SupportSection: React.FC = () => {
  const communityLinks = [
    {
      title: 'Understanding Your Child: Meltdowns vs Tantrums',
      author: 'Dr. Sarah Smith',
      date: '2 min read',
      emoji: '🤗'
    },
    {
      title: 'Sensory Adventures: Helping Your Little Explorer',
      author: 'Dr. Sarah Smith',
      date: '3 min read',
      emoji: '🌈'
    },
    {
      title: 'The Magic of Pretend Play: Building Imagination Together',
      author: 'Dr. Sarah Smith',
      date: '4 min read',
      emoji: '🎭'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
            <span>💬</span>
            <span>Support Team</span>
          </h3>
          <button className="text-blue-600 hover:text-blue-700 p-2 rounded-lg transition-colors bg-blue-50">
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          We're here to support you every step of the way! 
        </p>
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 shadow-sm">
          Chat with Our Team
        </button>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span>Parent Resources</span>
        </p>
        
        <div className="space-y-4">
          {communityLinks.map((link, index) => (
            <div key={index} className="group cursor-pointer p-4 rounded-xl hover:bg-blue-50 transition-all border border-blue-100 hover:border-blue-200 hover:shadow-sm">
              <h4 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors mb-2 leading-snug flex items-center space-x-2">
                <span>{link.emoji}</span>
                <span>{link.title}</span>
              </h4>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>by {link.author}</span>
                <span className="flex items-center space-x-1">
                  <span>{link.date}</span>
                  <ExternalLink className="w-3 h-3 group-hover:text-blue-600" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 text-blue-600 hover:text-blue-700 font-semibold text-sm py-2 hover:bg-blue-50 rounded-lg transition-all">
          View All Resources
        </button>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 p-6 shadow-sm">
        <div className="text-center mb-4">
          <div className="text-3xl mb-2">🎮</div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Fun Learning Games</h3>
          <p className="text-sm text-gray-600">
            Play together and watch your child learn and grow!
          </p>
        </div>
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 shadow-sm">
          🚀 Start Playing Together
        </button>
      </div>
    </div>
  );
};

export default SupportSection;