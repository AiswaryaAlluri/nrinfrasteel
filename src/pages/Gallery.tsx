import { useState } from "react";
import { X } from "lucide-react";

// ✅ Categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "scaffolding", name: "Scaffolding Systems" },
  { id: "acrowspan", name: "Acrow Spans" },
  { id: "centeredsheets", name: "Centered Sheets" },
  { id: "clamps", name: "Clamps" },
  { id: "galvanizedplanks", name: "Metal Planks" },
  { id: "jackpipes", name: "Jack Pipes" },
  { id: "columnbox", name: "Column Box" },
];

// ✅ Gallery Items
interface GalleryItem {
  id: string;
  category: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  // Scaffolding
  { id: "scaf1", category: "scaffolding", image: "/gallery/scaffolding/i1.png" },
  { id: "scaf2", category: "scaffolding", image: "/gallery/scaffolding/i2.png" },
  { id: "scaf3", category: "scaffolding", image: "/gallery/scaffolding/i3.png" },
  { id: "scaf4", category: "scaffolding", image: "/gallery/scaffolding/i4.png" },
  { id: "scaf5", category: "scaffolding", image: "/gallery/scaffolding/i5.png" },
  { id: "scaf6", category: "scaffolding", image: "/gallery/scaffolding/i6.png" },

  // Acrowspan
  { id: "acrow1", category: "acrowspan", image: "/gallery/acrowspan/i1.png" },
  { id: "acrow2", category: "acrowspan", image: "/gallery/acrowspan/i2.png" },
  { id: "acrow3", category: "acrowspan", image: "/gallery/acrowspan/i3.png" },
  { id: "acrow4", category: "acrowspan", image: "/gallery/acrowspan/i4.png" },

  // Centered Sheets
  { id: "cs1", category: "centeredsheets", image: "/gallery/centeredsheets/i1.png" },
  { id: "cs2", category: "centeredsheets", image: "/gallery/centeredsheets/i2.png" },
  { id: "cs3", category: "centeredsheets", image: "/gallery/centeredsheets/i3.png" },

  // Clamps
  { id: "cl1", category: "clamps", image: "/gallery/clamps/i1.jpg" },
  { id: "cl2", category: "clamps", image: "/gallery/clamps/i2.jpg" },
  { id: "cl3", category: "clamps", image: "/gallery/clamps/i3.jpg" },
  { id: "cl4", category: "clamps", image: "/gallery/clamps/i4.jpg" },
  { id: "cl5", category: "clamps", image: "/gallery/clamps/i5.jpg" },
  { id: "cl6", category: "clamps", image: "/gallery/clamps/i6.jpg" },
  { id: "cl7", category: "clamps", image: "/gallery/clamps/i7.jpg" },
  { id: "cl8", category: "clamps", image: "/gallery/clamps/i8.jpg" },
  { id: "cl9", category: "clamps", image: "/gallery/clamps/i9.jpg" },
  { id: "cl10", category: "clamps", image: "/gallery/clamps/i10.jpg" },
  { id: "cl11", category: "clamps", image: "/gallery/clamps/i11.jpg" },

  // Galvanized Planks
  { id: "gp1", category: "galvanizedplanks", image: "/gallery/galvanizedplanks/i1.png" },
  { id: "gp2", category: "galvanizedplanks", image: "/gallery/galvanizedplanks/i2.png" },

  // Jack Pipes
  { id: "jp1", category: "jackpipes", image: "/gallery/jackpipes/i1.png" },
  { id: "jp2", category: "jackpipes", image: "/gallery/jackpipes/i2.png" },
  { id: "jp3", category: "jackpipes", image: "/gallery/jackpipes/i3.png" },
  { id: "jp4", category: "jackpipes", image: "/gallery/jackpipes/i4.png" },

  // Column Box
  { id: "cb1", category: "columnbox", image: "/gallery/columnbox/i1.jpg" },
  { id: "cb2", category: "columnbox", image: "/gallery/columnbox/i2.jpg" },
  { id: "cb3", category: "columnbox", image: "/gallery/columnbox/i3.jpg" },
  { id: "cb4", category: "columnbox", image: "/gallery/columnbox/i4.jpg" },
  { id: "cb5", category: "columnbox", image: "/gallery/columnbox/i5.jpg" },
  { id: "cb6", category: "columnbox", image: "/gallery/columnbox/i6.jpg" },
  { id: "cb7", category: "columnbox", image: "/gallery/columnbox/i7.jpg" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800 font-['Poppins']">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 font-['Inter']">
            Showcasing our expertise in scaffolding and structural works
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-md text-sm md:text-base font-semibold font-['Inter'] transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-300"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-orange-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setLightboxImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.category}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-orange-400 text-sm font-semibold font-['Inter']">
                  {categories.find((c) => c.id === item.category)?.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X size={36} />
          </button>
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg shadow-gray-700"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
