import React from 'react';
import { Milestone, Target, Rocket, Trophy } from 'lucide-react';

const RoadmapSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
          Roadmap
        </h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-black/40 p-6 rounded-xl border border-yellow-400/30">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="text-yellow-400" />
                  Phase 1: Launch
                </h3>
                <ul className="space-y-2">
                  <li>• Website Launch</li>
                  <li>• Community Building</li>
                  <li>• Smart Contract Audit</li>
                  <li>• Token Launch</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-black/40 p-6 rounded-xl border border-yellow-400/30">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Milestone className="text-yellow-400" />
                  Phase 2: Growth
                </h3>
                <ul className="space-y-2">
                  <li>• Exchange Listings</li>
                  <li>• Marketing Campaign</li>
                  <li>• Game Development</li>
                  <li>• Partnership Announcements</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-black/40 p-6 rounded-xl border border-yellow-400/30">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Rocket className="text-yellow-400" />
                  Phase 3: Expansion
                </h3>
                <ul className="space-y-2">
                  <li>• NFT Collection</li>
                  <li>• Mobile App Development</li>
                  <li>• Cross-chain Integration</li>
                  <li>• DAO Implementation</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-black/40 p-6 rounded-xl border border-yellow-400/30">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Trophy className="text-yellow-400" />
                  Phase 4: Ecosystem
                </h3>
                <ul className="space-y-2">
                  <li>• DeFi Integration</li>
                  <li>• Metaverse Development</li>
                  <li>• Global Adoption</li>
                  <li>• Community Governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;