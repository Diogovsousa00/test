import React from 'react';
import { Coins } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Coins className="text-yellow-400 mr-2" />
            <span className="font-bold text-xl">MoonDoge</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Game</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Tokenomics</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Roadmap</a>
          </div>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;