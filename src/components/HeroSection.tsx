import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-32">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
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
            onClick={scrollToContact}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2"
          >
            <span>Contact Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
