export default function Services() {
  const products = [
    {
      title: 'Scaffolding Systems',
      description: 'Heavy-duty scaffolding systems designed for maximum safety and efficiency. Perfect for all types of construction projects, from residential to commercial buildings.',
      features: ['High load capacity', 'Easy assembly', 'Corrosion resistant'],
      image: '/gallery/scaffolding/i3.png',
    },
    {
      title: 'Centering Plates & Boxes',
      description: 'Premium quality centering plates and centering boxes for concrete slab construction. Engineered for strength and durability.',
      features: ['Precise dimensions', 'Heavy-duty construction', 'Reusable'],
      image: '/gallery/centeredsheets/i2.png',
    },
    {
      title: 'Adjustable Telescopic Spans (Acrow Span)',
      description: 'Versatile adjustable spans that provide flexible support solutions for various construction requirements. Easy to adjust and install.',
      features: ['Adjustable length', 'High strength', 'Lightweight design'],
      image: '/gallery/acrowspan/i2.png',
    },
    {
      title: 'Jack Pipes',
      description: 'Robust jack pipes designed to support heavy loads during construction. Essential for vertical load transfer in multi-story buildings.',
      features: ['High load capacity', 'Durable steel', 'Various sizes available'],
      image: '/gallery/jackpipes/i4.png',
    },

    {
      title: 'Column Boxes',
      description: 'High-quality column boxes including round column boxes for concrete column construction. Precision-engineered for perfect results.',
      features: ['Round & square options', 'Smooth finish', 'Easy handling'],
      image: '/gallery/columnbox/i2.jpg',
    },
    {
      title: 'U Jacks & Base Jacks',
      description: 'Essential adjustable support jacks for scaffolding systems. Provides stable base support and height adjustment capabilities.',
      features: ['Adjustable height', 'Strong base plate', 'Corrosion resistant'],
      image: '/gallery/ujake/i2.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products & Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive range of construction materials manufactured to the highest standards of quality and safety.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
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
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Old Material Purchase & Sales</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              We buy and sell used construction materials in excellent condition. Get the best value for your old equipment or purchase quality pre-owned materials at competitive prices.
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
    </div>
  );
}
