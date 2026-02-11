
import { Button } from "@/components/ui/button";
import { Heart, Star, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-teal-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center text-white">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Heart className="h-12 w-12 text-pink-300" />
            <h1 className="text-5xl md:text-7xl font-bold">
              Maldives
              <span className="text-pink-300">Love</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with beautiful local women in paradise. Experience authentic Maldivian culture 
            and create unforgettable memories in the world's most romantic destination.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
            >
              Start Dating Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full"
            >
              View Profiles
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="h-12 w-12 text-pink-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">30+ Profiles</h3>
              <p className="text-blue-100">Beautiful local women ready to meet tourists</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Star className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Premium Experience</h3>
              <p className="text-blue-100">Exclusive access to verified profiles</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Heart className="h-12 w-12 text-red-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Paradise Setting</h3>
              <p className="text-blue-100">Meet in the world's most beautiful islands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
