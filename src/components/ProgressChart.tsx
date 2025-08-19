import React from 'react';

const ProgressChart: React.FC = () => {
  const progressData = [
    { skill: 'Motor Skills', progress: 75, color: 'bg-blue-500' },
    { skill: 'Sensory Development', progress: 85, color: 'bg-green-500' },
    { skill: 'Communication', progress: 60, color: 'bg-yellow-500' },
    { skill: 'Social Skills', progress: 70, color: 'bg-purple-500' }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Development Progress</h2>
        <div className="text-2xl font-bold text-gray-900">78%</div>
      </div>

      <div className="space-y-4">
        {progressData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{item.skill}</span>
              <span className="text-sm text-gray-500">{item.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${item.color} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Great progress!</strong> Your child is developing well across all areas.
        </p>
      </div>
    </div>
  );
};

export default ProgressChart;