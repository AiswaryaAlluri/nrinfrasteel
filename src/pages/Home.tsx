import { Shield, Award, TrendingUp, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      title: 'Scaffolding Systems',
      description: 'Heavy-duty scaffolding for all construction needs',
      icon: '🏗️',
    },
    {
      title: 'Centering Plates',
      description: 'High-quality centering plates and boxes',
      icon: '⚙️',
    },
    {
      title: 'Jack Pipes',
      description: 'Durable jack pipes for structural support',
      icon: '🔧',
    },
    {
      title: 'Cup-Lock Systems',
      description: 'Advanced cup-lock scaffolding solutions',
      icon: '🔐',
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'Premium steel materials built to last',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Reliable Service',
      description: 'Trusted by construction professionals',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Competitive Pricing',
      description: 'Best value for your investment',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                             <img src="/logo.png" alt="logo" className='w-12' />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold">NR Infra Steel</h1>
                <p className="text-xl md:text-2xl text-orange-400 font-semibold">Building The Future</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Leading manufacturer and supplier of high-quality steel scaffolding, centering materials, and construction equipment in Hyderabad.
            </p>
            <button
              onClick={() => onNavigate('Contact Us')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of construction and scaffolding materials to meet all your project needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => onNavigate('Services')}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('Services')}
              className="text-orange-500 hover:text-orange-600 font-semibold flex items-center space-x-2 mx-auto"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in construction materials with unmatched quality and service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for expert advice and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onNavigate('Contact Us')}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-xl"
            >
              Contact Us Now
            </button>
            <a
              href="tel:9697786999"
              className="border-2 border-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call: 9697 786 999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
