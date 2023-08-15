// src/App.tsx

import React from 'react';
import Home from './views/Home';
import 'tailwindcss/tailwind.css';  // tailwindcss 스타일을 임포트합니다.
import './App.css'

const App: React.FC = () => {
  return (
      <div className="appContainer container mx-auto p-4">
        <Home />
      </div>
  );
}

export default App;
