import React from 'react';

interface SuccessSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const SuccessSlider: React.FC<SuccessSliderProps> = ({ value, onChange }) => {
  const getSliderColor = (value: number) => {
    if (value >= 8) return 'bg-green-500';
    if (value >= 5) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getTrackColor = (value: number) => {
    if (value >= 8) return 'bg-green-100';
    if (value >= 5) return 'bg-orange-100';
    return 'bg-red-100';
  };

  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-32">
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, ${
              value >= 8 ? '#10b981' : value >= 5 ? '#f59e0b' : '#ef4444'
            } 0%, ${
              value >= 8 ? '#10b981' : value >= 5 ? '#f59e0b' : '#ef4444'
            } ${(value / 10) * 100}%, #e5e7eb ${(value / 10) * 100}%, #e5e7eb 100%)`
          }}
        />
        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: ${value >= 8 ? '#10b981' : value >= 5 ? '#f59e0b' : '#ef4444'};
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: ${value >= 8 ? '#10b981' : value >= 5 ? '#f59e0b' : '#ef4444'};
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
        `}</style>
      </div>
      <div className="flex items-center space-x-1">
        <span className={`text-sm font-bold ${
          value >= 8 ? 'text-green-600' : value >= 5 ? 'text-orange-600' : 'text-red-600'
        }`}>
          {value}
        </span>
        <span className="text-xs text-gray-500">/10</span>
      </div>
    </div>
  );
};

export default SuccessSlider