import { Fragment } from 'react';
import { Hero } from './container';

import { Navbar } from './components';
function App() {
  return (
    <div
      className="bg-[url('/src/assets/jpgs/gabriel-rodrigues.jpg')] 
      min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
