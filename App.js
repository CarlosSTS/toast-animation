import React from 'react';
import { ToastProvider } from './src/hooks/Toast';

import Home from './src/pages/Home';

const App = () => {
  return (
    <ToastProvider>
       <Home />
    </ToastProvider>
  );
};

export default App;

