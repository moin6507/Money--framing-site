
import React from "react";
import { Button } from "@/components/ui/button";

export default function MoneyFramingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-400">Money Framing (MFR)</h1>
        <p className="text-xl text-gray-300 mb-6">
          The future of decentralized yield farming. Stake. Earn. Prosper.
        </p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-2xl px-6 py-2 text-lg">
            Trade on Uniswap
          </Button>
          <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-2xl px-6 py-2 text-lg">
            <a href="https://etherscan.io/address/0x73Ef9aaFf1faA986907995953278A342c49fA796" target="_blank" rel="noopener noreferrer">
              View on Etherscan
            </a>
          </Button>
          <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-2xl px-6 py-2 text-lg">
            Join Telegram
          </Button>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 text-left shadow-xl">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Tokenomics</h2>
          <ul className="text-gray-300 space-y-2 text-lg">
            <li><strong>Name:</strong> Money Framing</li>
            <li><strong>Symbol:</strong> MFR</li>
            <li><strong>Total Supply:</strong> 10,000,000</li>
            <li><strong>Contract Address:</strong> 0x73Ef9aaFf1faA986907995953278A342c49fA796</li>
            <li><strong>Network:</strong> Ethereum (ERC-20)</li>
          </ul>
        </div>

        <div className="mt-12 bg-gray-900 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-300">Our Mission</h2>
          <p className="text-gray-400 text-lg">
            Money Framing is dedicated to building a sustainable ecosystem for decentralized income through yield farming and community-driven growth. Our aim is to empower users worldwide to earn passive income by simply holding and staking MFR tokens.
          </p>
        </div>

        <footer className="mt-20 text-gray-500 text-sm">
          &copy; 2025 Money Framing. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
