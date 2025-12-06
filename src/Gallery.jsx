// src/Gallery.jsx
import React, { useState } from 'react';
import { tableGallery } from './galleryData';

export default function Gallery({ initialCount = 3, initialCategory = "All" }) {
  const [selected, setSelected] = useState(null);
  const [count, setCount] = useState(initialCount);

  const categories = ["All", ...new Set(tableGallery.map(item => item.category))];

  const filtered = initialCategory === "All"
    ? tableGallery
    : tableGallery.filter(item => item.category === initialCategory);

  function openModal(item) {
    setSelected(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeModal() {
    setSelected(null);
  }

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filtered.slice(0, count).map(item => (
          <div key={item.id} className="cursor-pointer" onClick={() => openModal(item)}>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.large}
                alt={item.alt}
                className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-2 text-center text-sm text-gray-600">
              click for details ⬆️
            </div>
          </div>
        ))}
      </div>

      {count < filtered.length && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setCount(prev => prev + initialCount)}
            className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100"
          >
            Load more
          </button>
        </div>
      )}

      {/* Product Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-6">
          <div className="absolute inset-0 bg-black/40" onClick={closeModal}></div>

          <div className="relative max-w-4xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
              </div>

              <div className="md:w-1/2 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{selected.name}</h3>
                    <div className="text-sm text-gray-500">{selected.type}</div>
                  </div>
                  <button onClick={closeModal} className="text-gray-400">Close</button>
                </div>

                <p className="mt-4 text-gray-600">{selected.short}</p>

                <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
                  {selected.specs.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                {/* Quotation Guidance */}
                <div className="mt-6 text-sm text-gray-600 space-y-3">
                  <p><strong>To receive an accurate quotation:</strong></p>

                  <p>
                    For <strong>hand-crafted designer resin tables</strong>, please include materials, thickness, intended environment, functional requirements, and any custom imagery, etching, or embedded elements (e.g., flowers, shells). Specify any integrated LED lighting or electronics and control requirements. Include dimensions and scale.
                  </p>

                  <p>
                    For sinks, tubs, and showers, please include dimensions, mounting type, drain configuration, and preferred finish or texture.
                  </p>

                  <p>
                    <strong>Project details:</strong> installation location, quantity, timeline, or any logistical considerations. Providing this information ensures your quotation is precise, efficient, and tailored to your exact vision.
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="mailto:quote@luxeglass.pro?subject=Quote%20Request%20-%20" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Request Quote</a>
                  <button onClick={() => { navigator.clipboard && navigator.clipboard.writeText(selected.name); alert('Product name copied to clipboard'); }} className="px-4 py-2 border rounded-md">Copy product name</button>
                </div>

                <div className="mt-6 text-xs text-gray-400">Note: Images shown are representative. Final finishes and hardware are selected per project.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
