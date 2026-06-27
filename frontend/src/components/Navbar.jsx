import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  

  return (
    <nav className="fixed w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <span className="text-[#4ADE80] font-semibold text-xl tracking-wide group-hover:text-white transition-colors">
              WanderLanka
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <span 
              onClick={() => navigate('/')}
              className={`text-sm font-medium pb-1 cursor-pointer transition ${currentPath === '/' ? 'text-[#4ADE80] border-b-2 border-[#4ADE80]' : 'text-gray-400 hover:text-white'}`}
            >
              Discover
            </span>
            <span 
              onClick={() => navigate('/favorites')}
              className={`text-sm font-medium pb-1 cursor-pointer transition ${currentPath === '/favorites' ? 'text-[#4ADE80] border-b-2 border-[#4ADE80]' : 'text-gray-400 hover:text-white'}`}
            >
              Saved Places
            </span>
          </div>

          <div className="flex items-center gap-4">
            
          </div>
        </div>
      </div>
    </nav>
  );
}
