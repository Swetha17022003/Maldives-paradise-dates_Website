import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleJoinNowClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                MaldivesLove
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Home</a>
              <a href="#profiles" className="text-gray-700 hover:text-pink-500 transition-colors">Profiles</a>
              <a href="#explore" className="text-gray-700 hover:text-pink-500 transition-colors">Explore</a>
              <a href="#pricing" className="text-gray-700 hover:text-pink-500 transition-colors">Premium</a>
              <Button 
                onClick={handleJoinNowClick}
                className="bg-gradient-to-r from-pink-500 to-coral-500 hover:from-pink-600 hover:to-coral-600 text-white"
              >
                Join Now & Explore
              </Button>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Home</a>
                <a href="#profiles" className="text-gray-700 hover:text-pink-500 transition-colors">Profiles</a>
                <a href="#explore" className="text-gray-700 hover:text-pink-500 transition-colors">Explore</a>
                <a href="#pricing" className="text-gray-700 hover:text-pink-500 transition-colors">Premium</a>
                <Button 
                  onClick={handleJoinNowClick}
                  className="bg-gradient-to-r from-pink-500 to-coral-500 hover:from-pink-600 hover:to-coral-600 text-white w-full"
                >
                  Join Now & Explore
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;
