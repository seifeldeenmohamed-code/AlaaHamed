import React, { useState } from 'react';
import HomePage from './components/HomePage';
import LibraryPage from './components/LibraryPage';
import RecitationsPage from './components/RecitationsPage';
import ArticlesPage from './components/ArticlesPage';
import LoginPage from './components/LoginPage';
import VideoPlayer from './components/VideoPlayer';
import BottomNavBar from './components/BottomNavBar';
import { Video } from './types';

export type View = 'home' | 'library' | 'recitations' | 'articles' | 'login';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [previousView, setPreviousView] = useState<View>('home');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleClosePlayer = () => {
    setSelectedVideo(null);
  };
  
  const navigateTo = (view: View) => {
    setPreviousView(currentView);
    setCurrentView(view);
  };
  
  const goBack = () => {
    setCurrentView(previousView);
  };

  const renderContent = () => {
    if (selectedVideo) {
      return <VideoPlayer video={selectedVideo} onClose={handleClosePlayer} />;
    }
    switch (currentView) {
      case 'home':
        return <HomePage onLoginClick={() => navigateTo('login')} />;
      case 'library':
        return <LibraryPage onSelectVideo={handleSelectVideo} />;
      case 'recitations':
        return <RecitationsPage onSelectVideo={handleSelectVideo} />;
      case 'articles':
        return <ArticlesPage />;
      case 'login':
        return <LoginPage onClose={goBack} />;
      default:
        return <HomePage onLoginClick={() => navigateTo('login')} />;
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200" dir="rtl">
        <div className="absolute top-0 right-0 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.3),rgba(255,255,255,0))] -z-0"></div>
        <main className="pb-24 z-10 relative">
            {renderContent()}
        </main>
        {!selectedVideo && currentView !== 'login' && <BottomNavBar currentView={currentView} setCurrentView={setCurrentView} />}
    </div>
  );
};

export default App;
