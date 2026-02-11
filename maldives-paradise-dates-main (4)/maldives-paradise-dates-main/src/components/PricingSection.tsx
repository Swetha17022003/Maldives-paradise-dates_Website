
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Heart, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Perfect for casual connections",
      features: [
        "View 10 profiles daily",
        "Send 5 messages per day",
        "Basic profile features",
        "Standard support"
      ],
      icon: Heart,
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Premium",
      price: "$39",
      period: "/month",
      description: "Most popular choice for serious daters",
      features: [
        "Unlimited profile views",
        "Unlimited messaging",
        "Advanced search filters",
        "See who liked you",
        "Premium profile badge",
        "Priority customer support"
      ],
      icon: Star,
      color: "from-pink-500 to-purple-500",
      popular: true
    },
    {
      name: "VIP",
      price: "$69",
      period: "/month",
      description: "Ultimate luxury dating experience",
      features: [
        "All Premium features",
        "VIP profile highlighting",
        "Personal dating concierge",
        "Exclusive events access",
        "Photo verification priority",
        "24/7 VIP support",
        "Monthly profile boost"
      ],
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your
            <span className="text-pink-500"> Premium Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock unlimited access to connect with beautiful Maldivian women and create unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-pink-500 shadow-2xl' : 'hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                    🔥 MOST POPULAR
                  </div>
                )}
                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3 rounded-full transform hover:scale-105 transition-all`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💎 Why Choose Premium?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-semibold text-gray-800">Verified Profiles</h4>
                <p className="text-sm text-gray-600">All women are verified locals</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🏝️</div>
                <h4 className="font-semibold text-gray-800">Local Experience</h4>
                <p className="text-sm text-gray-600">Authentic Maldivian culture</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💕</div>
                <h4 className="font-semibold text-gray-800">Safe & Secure</h4>
                <p className="text-sm text-gray-600">Protected messaging system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
