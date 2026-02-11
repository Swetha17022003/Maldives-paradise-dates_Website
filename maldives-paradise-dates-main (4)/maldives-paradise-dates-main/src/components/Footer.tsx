
import { Heart, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold">MaldivesLove</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connect with beautiful Maldivian women and experience authentic island culture. 
              Create unforgettable memories in paradise.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <span className="text-white font-bold">@</span>
              </div>
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <span className="text-white font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#profiles" className="text-gray-300 hover:text-pink-500 transition-colors">Profiles</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-pink-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-300">Malé, Maldives</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-300">hello@maldiveslove.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-300">+960 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MaldivesLove. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
