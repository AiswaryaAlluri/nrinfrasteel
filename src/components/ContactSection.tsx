import { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 4000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 section-animate ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Get in touch with us for inquiries, quotes, or any questions about our products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className={`section-animate ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
                  <a href="tel:9697786999" className="text-orange-500 hover:text-orange-600 font-semibold block">
                    9697 786 999
                  </a>
                  <a href="tel:9912822924" className="text-orange-500 hover:text-orange-600 font-semibold block">
                    9912 822 924
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <a
                    href="https://wa.me/919697786999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    Chat with Nasarath Pasha
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    SC Complex, Shop No.3<br />
                    Bholakpur, Musheerabad<br />
                    Hyderabad, Telangana - 500020<br />
                    India
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=17.421556,78.497667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center mt-2"
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`section-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us An Inquiry</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">Thank you for your inquiry!</p>
                  <p className="text-green-700 text-sm mt-1">We will get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: 'Full Name *', id: 'fullName', type: 'text', required: true },
                  { label: 'Company Name', id: 'companyName', type: 'text' },
                  { label: 'Email Address *', id: 'email', type: 'email', required: true },
                  { label: 'Phone Number *', id: 'phone', type: 'tel', required: true },
                  { label: 'Subject *', id: 'subject', type: 'text', required: true },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                      placeholder={`Enter your ${field.label.replace('*', '').trim().toLowerCase()}`}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'submitting' ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={`w-full h-[500px] rounded-2xl overflow-hidden shadow-xl section-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <iframe
            src="https://www.google.com/maps?q=17.421556,78.497667&hl=en&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
