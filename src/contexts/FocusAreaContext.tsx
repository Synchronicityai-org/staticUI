import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Strategy {
  id: string;
  title: string;
  description: string;
  examples: string[];
  videoLink: string;
  dayPlan: { day: number; successRate: number }[];
}

interface FocusArea {
  id: string;
  title: string;
  icon: string;
  color: string;
  strategies: Strategy[];
}

interface FocusAreaContextType {
  focusAreas: FocusArea[];
  addFocusArea: (area: FocusArea) => void;
  updateSuccessRate: (areaId: string, strategyId: string, day: number, rate: number) => void;
}

const FocusAreaContext = createContext<FocusAreaContextType | undefined>(undefined);

export const useFocusAreas = () => {
  const context = useContext(FocusAreaContext);
  if (!context) {
    throw new Error('useFocusAreas must be used within a FocusAreaProvider');
  }
  return context;
};

export const FocusAreaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [focusAreas, setFocusAreas] = useState<FocusArea[]>([
    {
      id: 'potty-training',
      title: 'Potty Training Journey',
      icon: '🚽',
      color: 'from-blue-400 to-blue-500',
      strategies: [
        {
          id: 'routine-building',
          title: 'Building a Consistent Routine',
          description: 'Establishing regular potty times helps your child develop healthy habits and reduces accidents.',
          examples: [
            'Set potty times every 2 hours during the day',
            'Use a visual schedule with pictures',
            'Celebrate small wins with stickers or praise'
          ],
          videoLink: 'https://example.com/potty-routine-video',
          dayPlan: Array.from({ length: 14 }, (_, i) => ({ day: i + 1, successRate: 0 }))
        },
        {
          id: 'positive-reinforcement',
          title: 'Positive Reinforcement Techniques',
          description: 'Encouraging your child with praise and rewards builds confidence and motivation.',
          examples: [
            'Use a potty chart with fun stickers',
            'Offer verbal praise for attempts, not just successes',
            'Create a special potty song or dance'
          ],
          videoLink: 'https://example.com/positive-reinforcement-video',
          dayPlan: Array.from({ length: 10 }, (_, i) => ({ day: i + 1, successRate: 0 }))
        }
      ]
    }
  ]);

  const addFocusArea = (area: FocusArea) => {
    setFocusAreas(prev => [...prev, area]);
  };

  const updateSuccessRate = (areaId: string, strategyId: string, day: number, rate: number) => {
    setFocusAreas(prev => prev.map(area => 
      area.id === areaId 
        ? {
            ...area,
            strategies: area.strategies.map(strategy =>
              strategy.id === strategyId
                ? {
                    ...strategy,
                    dayPlan: strategy.dayPlan.map(dayData =>
                      dayData.day === day ? { ...dayData, successRate: rate } : dayData
                    )
                  }
                : strategy
            )
          }
        : area
    ));
  };

  return (
    <FocusAreaContext.Provider value={{ focusAreas, addFocusArea, updateSuccessRate }}>
      {children}
    </FocusAreaContext.Provider>
  );
};