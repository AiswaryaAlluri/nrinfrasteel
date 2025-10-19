import { useEffect, useRef, useState } from 'react';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const products = [
    {
      title: 'Scaffolding Systems',
      description: 'Heavy-duty scaffolding systems designed for maximum safety and efficiency.',
      features: ['High load capacity', 'Easy assembly', 'Corrosion resistant'],
      image: '/gallery/scaffolding/i7.jpg',
    },
    {
      title: 'Centering Plates & Boxes',
      description: 'Premium quality centering plates and boxes for concrete slab construction.',
      features: ['Precise dimensions', 'Heavy-duty construction', 'Reusable'],
      image: '/gallery/centeredsheets/i2.png',
    },
    {
      title: 'Adjustable Telescopic Spans',
      description: 'Versatile adjustable spans that provide flexible support solutions.',
      features: ['Adjustable length', 'High strength', 'Lightweight design'],
      image: '/gallery/acrowspan/i2.png',
    },
    {
      title: 'Jack Pipes',
      description: 'Robust jack pipes designed to support heavy loads during construction.',
      features: ['High load capacity', 'Durable steel', 'Various sizes available'],
      image: '/gallery/jackpipes/i9.jpg',
    },
    {
      title: 'Column Boxes',
      description: 'High-quality column boxes for concrete column construction.',
      features: ['Round & square options', 'Smooth finish', 'Easy handling'],
      image: '/gallery/columnbox/i13.jpg',
    },
    {
      title: 'U Jacks & Base Jacks',
      description: 'Essential adjustable support jacks for scaffolding systems.',
      features: ['Adjustable height', 'Strong base plate', 'Corrosion resistant'],
      image: '/gallery/ujake/i2.png',
    },
  ];

  return (
    <section id="services" className="py-5 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 section-animate ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of construction materials manufactured to the highest standards of quality and safety.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group section-animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center section-animate ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Old Material Purchase & Sales</h3>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            We buy and sell used construction materials in excellent condition. Get the best value for your old equipment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:9697786999"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-xl"
            >
              Call for Quote
            </a>
            <a
              href="https://wa.me/919697786999"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
