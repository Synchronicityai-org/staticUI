import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import Dashboard from './components/Dashboard';
import KidsApp from './components/KidsApp';
import { FocusAreaProvider } from './contexts/FocusAreaContext';

function App() {
  const [currentView, setCurrentView] = useState<string>('dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'kids-app':
        return <KidsApp />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <FocusAreaProvider>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 flex">
        <Sidebar onNavigate={setCurrentView} />
        {renderCurrentView()}
      </div>
    </FocusAreaProvider>
  );
}

export default App;