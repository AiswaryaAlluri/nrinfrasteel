import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award } from 'lucide-react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 section-animate ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in construction materials since our inception.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 section-animate ${isVisible ? 'visible' : ''}`}>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
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

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 section-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h4>
            <p className="text-gray-600">
              To be a trusted partner in building the future by supplying superior infra steel products that ensure safety, quality, and efficiency in every construction project.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
              <Eye className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h4>
            <p className="text-gray-600">
              To become the most reliable and innovative supplier of construction materials, setting industry standards for quality and customer satisfaction.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h4>
            <p className="text-gray-600">
              Quality, integrity, reliability, and customer satisfaction are at the core of everything we do. We are committed to excellence in every interaction.
            </p>
          </div>
        </div>

        <div className={`max-w-4xl mx-auto section-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose NR Infra Steel?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-gray-600">
                All our products are manufactured using high-grade steel, ensuring durability and long-lasting performance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h4>
              <p className="text-gray-600">
                We offer the best value for your investment with transparent pricing and no hidden costs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h4>
              <p className="text-gray-600">
                Our experienced team provides professional advice to help you choose the right products for your needs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h4>
              <p className="text-gray-600">
                We understand project timelines and ensure prompt delivery to keep your construction on schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
