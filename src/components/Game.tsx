import React, { useState, useEffect, useCallback } from 'react';
import { Coins, Rocket, Flame } from 'lucide-react';

const Game = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [coins, setCoins] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isExploded, setIsExploded] = useState(false);

  const generateCoin = useCallback(() => {
    const newCoin = {
      x: Math.random() * 90,
      y: Math.random() * 90,
      id: Date.now(),
    };
    setCoins(prev => [...prev, newCoin]);
  }, []);

  const resetGame = () => {
    setPosition({ x: 50, y: 50 });
    setCoins([]);
    setScore(0);
    setIsExploded(false);
    setGameStarted(true);
  };

  useEffect(() => {
    if (gameStarted && !isExploded) {
      const interval = setInterval(generateCoin, 2000);
      return () => clearInterval(interval);
    }
  }, [gameStarted, generateCoin, isExploded]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || isExploded) return;
      
      // Prevent default scrolling behavior for arrow keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
      
      setPosition(prev => {
        let newX = prev.x;
        let newY = prev.y;
        const step = 5;

        switch (e.key) {
          case 'ArrowUp':
            newY = Math.max(0, prev.y - step);
            break;
          case 'ArrowDown':
            newY = Math.min(90, prev.y + step);
            break;
          case 'ArrowLeft':
            newX = Math.max(0, prev.x - step);
            break;
          case 'ArrowRight':
            newX = Math.min(90, prev.x + step);
            break;
        }

        // Check for corner collisions
        const isInCorner = (
          (newX <= 5 && newY <= 5) || // Top-left
          (newX >= 85 && newY <= 5) || // Top-right
          (newX <= 5 && newY >= 85) || // Bottom-left
          (newX >= 85 && newY >= 85)   // Bottom-right
        );

        if (isInCorner) {
          setIsExploded(true);
          return prev; // Don't update position if exploded
        }

        // Check collision with coins
        coins.forEach(coin => {
          const distance = Math.sqrt(
            Math.pow(newX - coin.x, 2) + Math.pow(newY - coin.y, 2)
          );
          if (distance < 5) {
            setCoins(prev => prev.filter(c => c.id !== coin.id));
            setScore(prev => prev + 10);
          }
        });

        return { x: newX, y: newY };
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [coins, gameStarted, isExploded]);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Coin Collector Game</h2>
      <p className="mb-4">Score: {score}</p>
      {!gameStarted ? (
        <button
          onClick={() => setGameStarted(true)}
          className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold mb-4"
        >
          Start Game
        </button>
      ) : (
        <div className="relative w-full h-[400px] bg-black/40 rounded-lg border border-yellow-400/30 overflow-hidden">
          <div
            className="absolute w-8 h-8 transition-all duration-100"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
          >
            {isExploded ? (
              <div className="animate-ping">
                <Flame size={32} className="text-red-500" />
              </div>
            ) : (
              <div className="animate-bounce">
                <Rocket size={32} className="text-yellow-400" />
              </div>
            )}
          </div>
          {coins.map(coin => (
            <div
              key={coin.id}
              className="absolute w-6 h-6"
              style={{ left: `${coin.x}%`, top: `${coin.y}%` }}
            >
              <Coins className="text-yellow-400 animate-pulse" />
            </div>
          ))}
          {isExploded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-red-500 mb-4">Game Over!</h3>
                <p className="text-xl mb-4">Final Score: {score}</p>
                <button
                  onClick={resetGame}
                  className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <p className="mt-4 text-sm text-gray-400">
        Use arrow keys to move and collect coins! Avoid the corners or you'll explode!
      </p>
    </div>
  );
};

export default Game;