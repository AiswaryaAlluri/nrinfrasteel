import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="logo" className="w-11" />
              </div>
              <div>
                <h3 className="text-xl font-bold">NR Infra Steel</h3>
                <p className="text-xs text-orange-400">Building The Future</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Leading manufacturer and supplier of high-quality steel
              scaffolding and centering materials in Hyderabad.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:9697786999"
                className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
              >
                <Phone size={16} />
                <span>9697 786 999</span>
              </a>
              <a
                href="tel:9912822924"
                className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
              >
                <Phone size={16} />
                <span>9912 822 924</span>
              </a>
              <a
                href="https://wa.me/919697786999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp: Nasarath Pasha</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Our Location
            </h4>
            <div className="flex items-start space-x-2 text-sm text-gray-400">
              <p>
                <strong>Head Office : </strong> Nandigama
              </p>
            </div>
            <br />
            <div className="flex items-start space-x-2 text-sm text-gray-400">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <p>
                SC Complex, Shop No.3
                <br />
                Bholakpur, Musheerabad
                <br />
                Hyderabad, Telangana - 500020
                <br />
                India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} NR Infra Steel. All rights
            reserved.
          </p>
          <p className="mt-1">Proprietor: Nasarath Pasha</p>
        </div>
      </div>
    </footer>
  );
}
