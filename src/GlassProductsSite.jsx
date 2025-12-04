import React, { useState } from 'react';

// GlassProductsSite.jsx
// Single-file React component built with Tailwind CSS utility classes.
// Default export is a complete, responsive one-page site suitable for small marketing
// and lead capture. Replace placeholder text, images and contact details as needed.

export default function GlassProductsSite() {
  const [selected, setSelected] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Signature Glass Dining Table — Aurora',
      type: 'Table',
      short: 'Seamless 1" tempered glass top with under-mounted LED and brushed stainless base.',
      img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c3d2a3b3d47d0b64582f9f6c5c7b2a9',
      specs: ['Tempered ultra-clear glass', 'Custom sizes up to 144"', 'Integrated cable management'],
      priceCue: 'Contact for pricing',
    },
    {
      id: 2,
      name: 'Frameless Glass Shower System — Cascade',
      type: 'Shower',
      short: 'Precision-milled hinges, ultra-clear panels, and custom hardware options.',
      img: 'https://images.unsplash.com/photo-1586105251261-72a756497a29?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a7c4f9f8e8c6b3c4a4d9c9f2e8b7d6f',
      specs: ['10mm tempered glass', 'Custom hardware finishes', 'ADA options available'],
      priceCue: 'Project pricing — call to discuss',
    },
    {
      id: 3,
      name: 'Artisan Stained Glass Sink — Meridian',
      type: 'Sink',
      short: 'Hand-fused stained-glass basin with clear protective underside coating.',
      img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f7d9a6e2f7c5d4a1b2c3d4e5f6a7b8c',
      specs: ['Hand-fused glass', 'Multiple color palettes', 'Sealed for long-term durability'],
      priceCue: 'Limited edition — inquire',
    },
  ];

  function openModal(product) {
    setSelected(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeModal() {
    setSelected(null);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold">G</div>
            <div>
              <div className="font-semibold">Luxe Glass Colorado</div>
              <div className="text-xs text-gray-500">Architectural glass for luxury residences</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#products" className="hover:text-indigo-600">Products</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="mailto:hello@example.com" className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">Request Quote</a>
          </nav>

          <button className="md:hidden px-3 py-2 border rounded-md text-sm">Menu</button>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Bespoke Architectural Glass — Built for Modern Residential Developments</h1>
              <p className="mt-4 text-lg text-gray-600">We partner with developers and architects to deliver signature glass pieces — from sculptural dining tables to entirely frameless shower systems and artisan sinks. American project management, precision craftsmanship, and strict QC.</p>

              <div className="mt-6 flex gap-3">
                <a href="#contact" className="px-5 py-3 bg-indigo-600 text-white rounded-md font-medium">Request a Project Quote</a>
                <a href="#products" className="px-5 py-3 border rounded-md">View Selected Works</a>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-600">
                <li>Made-to-spec samples</li>
                <li>US-based project manager</li>
                <li>Warranty & installation guidance</li>
                <li>Custom finishes & hardware</li>
              </ul>

              <div className="mt-6 text-xs text-gray-500">Representative images. Products are inspected and packaged in the U.S. Project shipping & lead times available upon request.</div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={products[0].img} alt="Featured glass" className="w-full h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Selected Projects & Signature Pieces</h2>
            <div className="text-sm text-gray-600">Hand-picked for architects & developers</div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-56 w-full overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.name}</h3>
                    <span className="text-xs text-gray-500">{p.type}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{p.short}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button onClick={() => openModal(p)} className="text-sm px-3 py-2 border rounded-md">View details</button>
                    <div className="text-sm text-gray-500">{p.priceCue}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About / Why us */}
        <section id="about" className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">Why developers choose us</h3>
              <p className="mt-4 text-gray-600">We focus exclusively on high-end residential projects. Our preferred workflows are built to align with developer timelines and construction schedules — sample approval, mock-ups, and fast-track production runs when required. We can provide COAs, load specs, and on-site installation guidance for all projects.</p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold">US-based PM</div>
                  <div className="text-sm text-gray-600 mt-1">Single point of contact for approvals & logistics.</div>
                </li>
                <li className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold">Quality inspections</div>
                  <div className="text-sm text-gray-600 mt-1">Batch testing and final inspection before shipment.</div>
                </li>
                <li className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold">Custom hardware</div>
                  <div className="text-sm text-gray-600 mt-1">Finishes that match the development’s palette.</div>
                </li>
                <li className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold">Warranty & Support</div>
                  <div className="text-sm text-gray-600 mt-1">Project warranties and installation guidance included.</div>
                </li>
              </ul>
            </div>

            <aside className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-lg">
              <div className="font-semibold">Project Inquiry</div>
              <p className="mt-2 text-sm text-gray-600">Tell us briefly about your project and we'll put together a scope & timeline.</p>

              <dl className="mt-4 text-sm text-gray-600 space-y-2">
                <div>
                  <dt className="font-medium">Lead contact</dt>
                  <dd>Project Manager — <span className="font-semibold">(303) 884-2918</span></dd>
                </div>
                <div>
                  <dt className="font-medium">Email</dt>
                  <dd>hello@luxeglass.pro</dd>
                </div>
                <div>
                  <dt className="font-medium">Office</dt>
                  <dd>Denver, CO • US-based project coordination</dd>
                </div>
              </dl>

              <a href="#contact" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Start a conversation</a>
            </aside>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Contact & Request Quote</h2>
          <p className="mt-2 text-sm text-gray-600">Prefer direct contact? Email or phone listed below — or use the quick form to request a project quote.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="bg-white p-6 rounded-lg shadow-sm">
              <label className="block text-sm font-medium">Your name</label>
              <input className="mt-1 block w-full border px-3 py-2 rounded-md" placeholder="Name" />

              <label className="block text-sm font-medium mt-4">Company</label>
              <input className="mt-1 block w-full border px-3 py-2 rounded-md" placeholder="Company / Developer" />

              <label className="block text-sm font-medium mt-4">Project details</label>
              <textarea className="mt-1 block w-full border px-3 py-2 rounded-md" rows="4" placeholder="Short description, timeline, location" />

              <div className="mt-4 flex gap-3">
                <button type="button" onClick={() => window.location = 'mailto:hello@example.com?subject=Project%20Inquiry'} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Email us</button>
                <button type="button" onClick={() => alert('Form submitted (demo) — replace with real handler)')} className="px-4 py-2 border rounded-md">Send (demo)</button>
              </div>
            </form>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold">Direct contact</h3>
              <p className="mt-2 text-sm text-gray-600">We respond to project inquiries during business hours. Please include an approximate timeline and square footage for accurate quoting.</p>

              <div className="mt-4 text-sm space-y-2">
                <div><strong>Phone:</strong> (303) 884-2918</div>
                <div><strong>Email:</strong> hello@luxeglass.pro</div>
                <div><strong>Address:</strong> Denver, CO (US-based project coordination)</div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium">Download: Project spec sheet</h4>
                <p className="text-xs text-gray-500 mt-1">PDF available on request—email for immediate copy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-200 mt-12">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="font-semibold text-white">Luxe Glass Colorado</div>
              <div className="text-sm mt-2">High-end architectural glass — Developed for the North American market.</div>
            </div>

            <div className="text-sm">
              <div>Phone: (303) 884-2918</div>
              <div>Email: hello@luxeglass.pro</div>
              <div className="mt-2 text-xs text-gray-400">© {new Date().getFullYear()} Luxe Glass Colorado. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </main>

      {/* Product modal */}
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

                <div className="mt-6 flex gap-3">
                  <a href="mailto:hello@example.com?subject=Quote%20Request%20-%20" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Request Quote</a>
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

/*
  Instructions:
  - This file expects Tailwind CSS to be available in the project.
  - Replace placeholder email/phone/address with your real contact info.
  - Hook the contact form to a server endpoint or CRM to collect leads.
  - Swap images with project photos to avoid stock-photo confusion.
  - Add analytics or a simple Google Business Profile link if you want local SEO.
*/
