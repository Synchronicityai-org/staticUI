import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const MilestoneSection: React.FC = () => {
  const stats = [
    {
      value: '4',
      label: 'Fun Activities',
      icon: '🎯'
    },
    {
      value: '50%',
      label: 'Progress Made',
      icon: '⭐'
    },
    {
      value: '0',
      label: 'Support Team',
      icon: '👥'
    }
  ];

  const milestones = [
    {
      id: 1,
      title: 'Explores Environment with Mouth',
      status: 'active',
      tasks: [
        {
          name: 'Sensory Exploration',
          description: 'Use a variety of safe, soft toys and objects with different textures for your child to explore with their mouth.',
          completed: false
        },
        {
          name: 'Multimodal Stimulation',
          description: 'Play music and encourage your child to move their mouth in multimodal in response to the rhythm.',
          completed: false
        }
      ]
    },
    {
      id: 2,
      title: 'Tolerates Textures (With Purpose)',
      status: 'complete',
      tasks: [
        {
          name: 'Environmental Design',
          description: 'Create a quiet space with soft lighting and soft textures.',
          completed: true
        },
        {
          name: 'Sensory Modulation',
          description: 'Try guiding them gently or using toys to textures that support felt behavior.',
          completed: true
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
            <span>🏆</span>
            <span>Current Milestone</span>
          </h3>
          <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-colors bg-blue-50 px-4 py-2 rounded-lg">
            <span>View All Milestones</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-300 rounded-lg p-4 mb-8">
          <p className="text-blue-800 text-sm">
            <strong>Disclaimer:</strong> While we are not certified for developmental therapy, this is being designed based on evidence-based approaches, including working with occupational therapists, speech-language pathologists, and physical therapists, to create developmental strategies.
          </p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
          <span>📈</span>
          <span>Your Child's Journey</span>
        </h3>
        <p className="text-gray-600 mb-8">
          Your little one is making wonderful progress with Sensory Regulation and Emotional Intelligence, with emerging Motor skills development.
        </p>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className="border border-blue-100 rounded-xl p-6 bg-gradient-to-r from-white to-blue-50/30">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    Milestone {milestone.id}. {milestone.title}
                  </h4>
                  {milestone.status === 'complete' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      🎉 Complete!
                    </span>
                  )}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-lg">
                  Calibrate
                </button>
              </div>

              <div className="space-y-4">
                {milestone.tasks.map((task, taskIndex) => (
                  <div 
                    key={taskIndex}
                    className={`p-4 rounded-lg border ${
                      task.completed 
                        ? 'border-green-200 bg-gradient-to-r from-green-50 to-emerald-50' 
                        : 'border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-gray-800">{task.name}</h5>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.completed 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {task.completed ? '✅ DONE' : '🚀 READY'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MilestoneSection;