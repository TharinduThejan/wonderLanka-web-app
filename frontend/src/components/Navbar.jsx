import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icons from './Icons';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [navSearchQuery, setNavSearchQuery] = useState('');

  const handleNavSearch = (e) => {
    e.preventDefault();
    const q = navSearchQuery.trim();
    if (q) {
      navigate(`/?q=${encodeURIComponent(q)}`);
      setNavSearchQuery('');
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            {/* <Icons.Menu /> */}
            <span className="text-[#4ADE80] font-semibold text-xl tracking-wide group-hover:text-white transition-colors">
              WanderLanka
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <span 
              onClick={() => navigate('/')}
              className={`text-sm font-medium pb-1 cursor-pointer transition ${currentPath === '/explore' ? 'text-[#4ADE80] border-b-2 border-[#4ADE80]' : 'text-gray-400 hover:text-white'}`}
            >
              Discover
            </span>
            <span 
              onClick={() => navigate('/favorites')}
              className={`text-sm font-medium pb-1 cursor-pointer transition ${currentPath === '/favorites' ? 'text-[#4ADE80] border-b-2 border-[#4ADE80]' : 'text-gray-400 hover:text-white'}`}
            >
              Saved Places
            </span>
            {/* <span className="text-gray-400 hover:text-white text-sm font-medium transition cursor-pointer">Experiences</span> */}
          </div>

          <div className="flex items-center gap-4">
            {/* <form onSubmit={handleNavSearch} className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Icons.Search />
              </div>
              <input 
                id="navbar-search-input"
                type="text" 
                placeholder="Search..." 
                value={navSearchQuery}
                onChange={(e) => setNavSearchQuery(e.target.value)}
                className="bg-[#1E1E1E] border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-[#4ADE80] w-48 transition-colors text-white"
              />
            </form> */}
            {/* Quick access to favorites */}
            {/* <button 
              onClick={() => navigate('/favorites')}
              className={`p-2 rounded-full border transition-colors ${currentPath === '/favorites' ? 'bg-white/10 border-white/20 text-[#4ADE80]' : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <Icons.Bookmark filled={currentPath === '/favorites'} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Profile" />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
