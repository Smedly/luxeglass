// src/Gallery.jsx
import React, { useState } from 'react'
import tableGallery from './galleryData' // uses default export from your galleryData.js

function Thumb({ img, onOpen }) {
  return (
    <article className="bg-white rounded overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <button onClick={() => onOpen(img)} className="w-full text-left">
        <img
          src={img.thumb}
          alt={img.alt}
          loading="lazy"
          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </button>
      <div className="p-3 text-sm">
        <div className="font-semibold">{img.title}</div>
        <div className="text-xs text-gray-500">
          {img.project || 'Click for Details ⬆️'} {img.location ? `• ${img.location}` : ''}
        </div>
      </div>
    </article>
  )
}

export default function Gallery({ initialCategory = 'All', initialCount = 9 }) {
  const items = tableGallery

  // REMOVE "ALL"
  //const categories = ['All', ...Array.from(new Set(items.map(i => i.category)))]

  //new section
  
  const categories = Array.from(new Set(items.map(i => i.category)))

  // If someone still passes initialCategory="All", switch to first category
  const safeInitial = categories.includes(initialCategory)
    ? initialCategory
    : categories[0]  

  // END new section
  
  const [filter, setFilter] = useState(initialCategory)
  const [open, setOpen] = useState(null)
  const [count, setCount] = useState(initialCount)

  const visible = items.filter(i => (filter === 'All' ? true : i.category === filter))

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      {/* Category Filter */}
      <div className="flex items-center gap-4 mb-6">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => { setFilter(c); setCount(initialCount) }}
            className={`px-3 py-1 rounded ${filter === c ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
          >
            {c}
          </button>
        ))}
      </div>
      {/* Gallery grid & lightbox remain unchanged... */}

      {/* Thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.slice(0, count).map(img => (
          <Thumb key={img.id} img={img} onOpen={setOpen} />
        ))}
      </div>

      {/* Load more */}
      {visible.length > count && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setCount(c => c + initialCount)}
            className="px-4 py-2 border rounded"
          >
            Load more
          </button>
        </div>
      )}

      {/* Lightbox / Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(null)} />

          <div className="relative max-w-4xl w-full bg-white rounded shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Large Image */}
              <div className="md:w-2/3 p-4">
                <img
                  src={open.large}
                  alt={open.alt}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/3 p-6">
                <h3 className="font-bold text-xl">{open.title}</h3>
                <div className="text-sm text-gray-600 mt-2">
                  {open.project || ''} {open.location ? `• ${open.location}` : ''}
                </div>
                <p className="mt-4 text-sm font-serif bold text-gray-800">{open.description}</p>

                {/* Updated quotation instructions */}
                <p className="mt-4 text-sm text-gray-700 whitespace-pre-line">
                  To receive an accurate quotation, please include as many project details as possible:

                  {"\n\n"}For designer resin tables: dimensions, scale, materials, intended environment, functional requirements, custom imagery, text, or embedded elements, LED or other electronics, control requirements, etc..

                  {"\n\n"}For sinks, tubs, and showers: dimensions, mounting type, drain config, preferred finish/texture, etc..

                  {"\n\n"}Project details: installation location, quantity, timeline, logistical considerations.
                </p>

                {/* Request Quote Button */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={`mailto:quote@luxeglass.pro?subject=Inquiry about ${encodeURIComponent(open.title)}`}
                    className="px-4 py-2 bg-indigo-600 text-white rounded"
                  >
                    Request quote
                  </a>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 text-gray-600 
              bg-white/80 backdrop-blur px-2 py-1 rounded-md
              md:bg-transparent md:px-0 md:py-0"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
