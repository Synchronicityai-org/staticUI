import React from 'react';
import WelcomeSection from './WelcomeSection';
import FeelingCheckIn from './FeelingCheckIn';
import FocusAreaCards from './FocusAreaCards';
import ProgressCelebration from './ProgressCelebration';
import TinyBucksHeader from './TinyBucksHeader';
import MilestoneDetail from './MilestoneDetail';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 max-w-6xl mx-auto">
        <TinyBucksHeader />
        <WelcomeSection />
        <FocusAreaCards />
        <MilestoneDetail />
        <ProgressCelebration />
        <FeelingCheckIn />
      </div>
    </div>
  );
};

export default Dashboard;