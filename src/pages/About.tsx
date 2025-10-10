import { Target, Eye, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About NR Infra Steel</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your trusted partner in construction materials since our inception.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  NR Infra Steel stands as a leading manufacturer and supplier of high-quality steel scaffolding and centering materials in Hyderabad. Under the leadership of our proprietor, <span className="font-semibold text-gray-900">Nasarath Pasha</span>, we have built a reputation for excellence in the construction materials industry.
                </p>
                <p>
                  Our commitment to quality and reliability has made us the preferred choice for construction professionals across the region. We specialize in manufacturing a comprehensive range of products including centering plates, jack pipes, acrow spans, column boxes, scaffolding systems, and cup-lock systems.
                </p>
                <p>
                  At NR Infra Steel, we understand the critical role that quality materials play in construction projects. That is why we ensure every product meets the highest standards of durability, safety, and performance.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="NR Infra Steel"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To be a trusted partner in building the future by supplying superior infra steel products that ensure safety, quality, and efficiency in every construction project.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become the most reliable and innovative supplier of construction materials, setting industry standards for quality and customer satisfaction.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Quality, integrity, reliability, and customer satisfaction are at the core of everything we do. We are committed to excellence in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose NR Infra Steel?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  All our products are manufactured using high-grade steel, ensuring durability and long-lasting performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer the best value for your investment with transparent pricing and no hidden costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our experienced team provides professional advice to help you choose the right products for your needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                <p className="text-gray-600">
                  We understand project timelines and ensure prompt delivery to keep your construction on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Proprietor</h2>
          <p className="text-xl mb-4 opacity-90">
            <span className="font-semibold">Nasarath Pasha</span>
          </p>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            With years of industry experience and a commitment to excellence, our proprietor leads NR Infra Steel with a vision of providing the best construction materials to our valued customers.
          </p>
        </div>
      </section>
    </div>
  );
}
