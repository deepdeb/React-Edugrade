import { Users, CreditCard, Headset } from 'lucide-react'; // Standard feather-style icons

const featureData = [
  {
    title: "Industry Professional UX Writers",
    icon: <Users className="w-8 h-8 mb-4" />,
  },
  {
    title: "Try Before You Buy",
    icon: <CreditCard className="w-8 h-8 mb-4" />,
  },
  {
    title: "Dedicated Account Managers",
    icon: <Headset className="w-8 h-8 mb-4" />,
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 tracking-tight text-gray-900">
          BEST PLATFORM TO LEARN EVERYTHING
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-yellow-400 text-black p-8 rounded-xl font-bold flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="opacity-80">
                {feature.icon}
              </div>
              
              <p className="text-lg leading-snug">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;