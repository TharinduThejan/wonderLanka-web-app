import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#121212] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[#4ADE80] font-bold text-lg">WanderLanka</span>
        
        <span className="text-sm text-gray-500">© 2026 WanderLanka. All rights reserved.</span>
      </div>
    </footer>
  );
}
