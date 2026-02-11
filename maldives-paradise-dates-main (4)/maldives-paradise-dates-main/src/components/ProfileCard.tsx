
import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProfileCardProps {
  name: string;
  location: string;
  interests: string[];
  image: string;
  isOnline: boolean;
}

const ProfileCard = ({ name, location, interests, image, isOnline }: ProfileCardProps) => {
  return (
    <Card className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden">
      <div className="relative">
        <div className="aspect-[3/4] bg-gradient-to-br from-pink-200 to-blue-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 right-4">
            {isOnline && (
              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Online
              </div>
            )}
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <div className="flex items-center text-sm opacity-90">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {interests.slice(0, 3).map((interest, index) => (
            <span
              key={index}
              className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {interest}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1 bg-gradient-to-r from-pink-500 to-coral-500 hover:from-pink-600 hover:to-coral-600 text-white">
            <Heart className="h-4 w-4 mr-2" />
            Connect
          </Button>
          <Button variant="outline" size="sm" className="px-3">
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
