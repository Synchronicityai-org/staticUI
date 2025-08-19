import React from 'react';
import { 
  Home, 
  Heart,
  Target,
  BookOpen,
  Users,
  Calendar,
  MessageCircle,
  Settings,
  HelpCircle,
  User,
  Sparkles,
  Gamepad2
} from 'lucide-react';

interface SidebarProps {
  onNavigate: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true, view: 'dashboard' },
    { icon: Heart, label: 'My Journey' },
    { icon: Target, label: 'Focus Areas' },
    { icon: Sparkles, label: 'Milestones' },
    { icon: Gamepad2, label: 'Kids Learning', view: 'kids-app' },
    { icon: BookOpen, label: 'Resources' },
    { icon: Calendar, label: 'Daily Plans' },
    { icon: Users, label: 'Community' },
    { icon: MessageCircle, label: 'Support Chat' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help & Tips' }
  ];

  return (
    <div className="w-72 bg-white/80 backdrop-blur-sm border-r border-orange-100 flex flex-col shadow-lg">
      <div className="p-8 border-b border-orange-100">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">✨</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">TinyWins</h1>
            <p className="text-sm text-orange-600 font-medium">Your parenting companion</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <button
                  onClick={() => item.view && onNavigate(item.view)}
                  className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl text-sm font-medium transition-all duration-200 ${
                    item.active
                      ? 'bg-gradient-to-r from-orange-100 to-rose-100 text-orange-700 shadow-sm border-l-4 border-orange-400'
                      : 'text-gray-600 hover:bg-orange-50 hover:text-orange-700 hover:shadow-sm'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6 border-t border-orange-100">
        <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-2xl p-4 mb-4">
          <p className="text-sm text-orange-800 font-medium mb-2">💝 Daily Reminder</p>
          <p className="text-xs text-orange-700 leading-relaxed">
            "Every small step forward is a victory worth celebrating. You're doing amazing!"
          </p>
        </div>
        
        <div className="flex items-center space-x-3 px-4 py-3 rounded-2xl hover:bg-orange-50 transition-colors cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-200 to-rose-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-orange-700" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">Sarah</p>
            <p className="text-xs text-orange-600 truncate">Loving parent 💕</p>
          </div>
        </div>
      </div>
    </div>
  );
};