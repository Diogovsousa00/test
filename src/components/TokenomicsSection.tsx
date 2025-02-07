import React from 'react';
import { PieChart, Wallet, Shield, Rocket } from 'lucide-react';

const TokenomicsSection = () => {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
          Tokenomics
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/40 p-6 rounded-xl border border-yellow-400/30">
            <PieChart className="text-yellow-400 mb-4 mx-auto" size={40} />
            <h3 className="text-xl font-bold mb-2 text-center">Distribution</h3>
            <ul className="space-y-2">
              <li>• 40% Public Sale</li>
              <li>• 30% Liquidity Pool</li>
              <li>• 20% Development</li>
              <li>• 10% Team</li>
            </ul>
          </div>
          <div className="bg-black/40 p-6 rounded-xl border border-yellow-400/30">
            <Shield className="text-yellow-400 mb-4 mx-auto" size={40} />
            <h3 className="text-xl font-bold mb-2 text-center">Security</h3>
            <ul className="space-y-2">
              <li>• Locked Liquidity</li>
              <li>• Audited Contract</li>
              <li>• Renounced Ownership</li>
              <li>• Anti-Whale Mechanism</li>
            </ul>
          </div>
          <div className="bg-black/40 p-6 rounded-xl border border-yellow-400/30">
            <Wallet className="text-yellow-400 mb-4 mx-auto" size={40} />
            <h3 className="text-xl font-bold mb-2 text-center">Taxes</h3>
            <ul className="space-y-2">
              <li>• 2% Reflection</li>
              <li>• 3% Marketing</li>
              <li>• 2% Development</li>
              <li>• 1% Burn</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;