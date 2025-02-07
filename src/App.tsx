import React, { useState, useEffect } from 'react';
import { Rocket, Coins, Github, Twitter, Disc as Discord } from 'lucide-react';
import Game from './components/Game';
import Navbar from './components/Navbar';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';

function App() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-bounce mb-6">
            <Rocket size={64} className="inline-block text-yellow-400" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            MoonDoge Coin
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Luana bichona! 🚀
          </p>
          <button
            onClick={() => setShowGame(!showGame)}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 rounded-full font-bold text-black hover:from-yellow-500 hover:to-orange-600 transition-all"
          >
            {showGame ? 'Hide Game' : 'Play To Earn Game!'}
          </button>
        </div>
      </section>

      {/* Game Section */}
      {showGame && (
        <section className="py-16 px-4 bg-black/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <Game />
          </div>
        </section>
      )}

      {/* Tokenomics Section */}
      <TokenomicsSection />

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Footer */}
      <footer className="bg-black/30 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Discord size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-center text-gray-400">
            © 2024 MoonDoge Coin. To the moon! 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;