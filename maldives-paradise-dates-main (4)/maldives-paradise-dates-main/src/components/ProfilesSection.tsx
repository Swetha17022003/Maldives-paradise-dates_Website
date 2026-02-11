
import ProfileCard from "./ProfileCard";

const ProfilesSection = () => {
  const profiles = [
    { name: "Aisha", location: "Malé", interests: ["Beach walks", "Diving", "Culture"], image: "/placeholder.svg", isOnline: true },
    { name: "Mariyam", location: "Hulhumalé", interests: ["Photography", "Travel", "Art"], image: "/placeholder.svg", isOnline: false },
    { name: "Fathimath", location: "Addu City", interests: ["Cooking", "Swimming", "Music"], image: "/placeholder.svg", isOnline: true },
    { name: "Aminath", location: "Fuvahmulah", interests: ["Dancing", "Reading", "Yoga"], image: "/placeholder.svg", isOnline: true },
    { name: "Hawwa", location: "Malé", interests: ["Surfing", "Languages", "Food"], image: "/placeholder.svg", isOnline: false },
    { name: "Shafeena", location: "Villingili", interests: ["Sailing", "Fitness", "Movies"], image: "/placeholder.svg", isOnline: true },
    { name: "Nashida", location: "Hulhumalé", interests: ["Snorkeling", "Fashion", "Travel"], image: "/placeholder.svg", isOnline: true },
    { name: "Shifana", location: "Malé", interests: ["Art", "Culture", "Adventure"], image: "/placeholder.svg", isOnline: false },
    { name: "Khadeeja", location: "Addu City", interests: ["Beach", "Music", "Dancing"], image: "/placeholder.svg", isOnline: true },
    { name: "Zulaikha", location: "Gan", interests: ["Photography", "Nature", "Books"], image: "/placeholder.svg", isOnline: true },
    { name: "Fazeela", location: "Malé", interests: ["Swimming", "Cooking", "Games"], image: "/placeholder.svg", isOnline: false },
    { name: "Rishfa", location: "Hulhumalé", interests: ["Diving", "Travel", "Fitness"], image: "/placeholder.svg", isOnline: true },
    { name: "Shathya", location: "Thinadhoo", interests: ["Culture", "Art", "Ocean"], image: "/placeholder.svg", isOnline: true },
    { name: "Nadhiya", location: "Malé", interests: ["Adventure", "Sports", "Music"], image: "/placeholder.svg", isOnline: false },
    { name: "Sameera", location: "Villingili", interests: ["Beach walks", "Yoga", "Food"], image: "/placeholder.svg", isOnline: true },
    { name: "Niuma", location: "Addu City", interests: ["Photography", "Travel", "Fashion"], image: "/placeholder.svg", isOnline: true },
    { name: "Aishath", location: "Fuvahmulah", interests: ["Swimming", "Reading", "Culture"], image: "/placeholder.svg", isOnline: false },
    { name: "Raheema", location: "Malé", interests: ["Dancing", "Movies", "Adventure"], image: "/placeholder.svg", isOnline: true },
    { name: "Shafiya", location: "Hulhumalé", interests: ["Surfing", "Art", "Travel"], image: "/placeholder.svg", isOnline: true },
    { name: "Zahiya", location: "Gan", interests: ["Nature", "Books", "Cooking"], image: "/placeholder.svg", isOnline: false },
    { name: "Mariya", location: "Malé", interests: ["Beach", "Fitness", "Music"], image: "/placeholder.svg", isOnline: true },
    { name: "Nashfa", location: "Thinadhoo", interests: ["Diving", "Culture", "Games"], image: "/placeholder.svg", isOnline: true },
    { name: "Shiyana", location: "Addu City", interests: ["Photography", "Adventure", "Food"], image: "/placeholder.svg", isOnline: false },
    { name: "Lubna", location: "Villingili", interests: ["Swimming", "Travel", "Art"], image: "/placeholder.svg", isOnline: true },
    { name: "Sana", location: "Malé", interests: ["Fashion", "Dancing", "Ocean"], image: "/placeholder.svg", isOnline: true },
    { name: "Shazna", location: "Hulhumalé", interests: ["Beach walks", "Reading", "Yoga"], image: "/placeholder.svg", isOnline: false },
    { name: "Nayha", location: "Fuvahmulah", interests: ["Cooking", "Music", "Sports"], image: "/placeholder.svg", isOnline: true },
    { name: "Zaeema", location: "Malé", interests: ["Adventure", "Movies", "Culture"], image: "/placeholder.svg", isOnline: true },
    { name: "Shifla", location: "Gan", interests: ["Nature", "Photography", "Travel"], image: "/placeholder.svg", isOnline: false },
    { name: "Naila", location: "Addu City", interests: ["Beach", "Art", "Fitness"], image: "/placeholder.svg", isOnline: true }
  ];

  return (
    <section id="profiles" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Beautiful
            <span className="text-pink-500"> Maldivian Women</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with verified local women who are excited to meet tourists and share their culture
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              location={profile.location}
              interests={profile.interests}
              image={profile.image}
              isOnline={profile.isOnline}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see more profiles and connect?</p>
          <button className="bg-gradient-to-r from-pink-500 to-coral-500 hover:from-pink-600 hover:to-coral-600 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all shadow-lg">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
