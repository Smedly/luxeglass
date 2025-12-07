// src/GlassProductsSite.jsx
import React, { useState, useEffect, useRef } from 'react';
import Gallery from './Gallery';

export default function GlassProductsSite() {
  const [selected, setSelected] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const spinnerRef = useRef();
  const statusRef = useRef();

  // Smooth-scroll offset helper
  useEffect(() => {
    const handleLink = (e) => {
      const href = e.target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    document.addEventListener('click', handleLink);
    return () => document.removeEventListener('click', handleLink);
  }, []);

  function openModal(product) {
    setSelected(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function closeModal() {
    setSelected(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const formData = new FormData(e.target);
    formData.append('access_key', '831c26d9-9fa8-4b2d-b6e4-d4248267e967');
    formData.append('subject', 'New Project Quote Request');
    formData.append('redirect', '');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const result = await res.json();

      if (result.success) {
        setStatusMessage('✅ Your request was successfully sent!');
        e.target.reset();
      } else {
        setStatusMessage('⚠️ Something went wrong. Please try again.');
      }
    } catch {
      setStatusMessage('⚠️ Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logos/luxe-glass-logo.webp" alt="Luxe Glass Logo" className="h-10 w-auto" />
            <div>
              <div className="font-semibold">Luxe Glass Colorado</div>
              <div className="text-xs text-gray-500">Architectural glass, marble & hand-cast designer resin</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#products" className="hover:text-indigo-600">Products</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#contact" className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">Request Quote</a>
          </nav>

          <button className="md:hidden px-3 py-2 border rounded-md text-sm">Menu</button>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Bespoke Architectural Materials — Built for Modern Commercial & Residential Developments
              </h1>

              <p className="mt-4 text-lg text-gray-600">
                We work directly with architects and developers to deliver signature elements crafted in glass, marble,
                and hand-cast designer resin. From sculptural statement pieces to functional architectural components,
                every project is engineered for longevity, precision and visual impact.
              </p>

              <div className="mt-6 flex gap-3">
                <a href="#contact" className="px-5 py-3 bg-indigo-600 text-white rounded-md font-medium">Request a Project Quote</a>
                <a href="#products" className="px-5 py-3 border rounded-md">View Selected Works</a>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-600">
                <li>Made-to-spec samples</li>
                <li>US-based project manager</li>
                <li>Warranty & installation guidance</li>
                <li>Custom finishes & embedded materials</li>
              </ul>

              <div className="mt-6 text-xs text-gray-500">
                All pieces are inspected and packaged in the U.S. Detailed lead times and
                production schedules available upon request.
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="/images/tables/Top8/Exquisite-Berg.webp" alt="Featured material" className="w-full h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-28">
          <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:gap-0">
            <h2 className="text-2xl font-bold whitespace-nowrap">Selected Projects & Signature Pieces</h2>
            <div className="text-sm text-gray-600 max-w-xl md:text-right leading-relaxed">
              Custom-crafted works in marble, glass, and hand-cast designer resin.<br/>
              Advanced lighting and electronic integrations with seamless smartphone control.<br/>
              Imagery, textures, embedded items tailored to any artistic requirement.
            </div>
          </div>

          <div className="mt-8">
            <Gallery initialCount={3} initialCategory="All" />
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white border-t scroll-mt-28">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">Why developers choose us</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We focus exclusively on high-end residential and commercial developments. Our processes align with
                developer timelines — sample approvals, mock-ups, coordinated shipping, and accelerated production
                windows when required. COAs, load specs, and installation guidance are available for all projects.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="p-4 bg-gray-50 rounded-lg"><div className="font-semibold">US-based PM</div><div className="text-sm text-gray-600 mt-1">Single point of contact for approvals & logistics.</div></li>
                <li className="p-4 bg-gray-50 rounded-lg"><div className="font-semibold">Quality inspections</div><div className="text-sm text-gray-600 mt-1">Batch testing and final inspection before shipment.</div></li>
                <li className="p-4 bg-gray-50 rounded-lg"><div className="font-semibold">Custom hardware</div><div className="text-sm text-gray-600 mt-1">Finishes matched to development palettes.</div></li>
                <li className="p-4 bg-gray-50 rounded-lg"><div className="font-semibold">Warranty & Support</div><div className="text-sm text-gray-600 mt-1">Project warranties and installation guidance.</div></li>
              </ul>
            </div>

            <aside className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-lg">
              <div className="font-semibold">Project Inquiry</div>
              <p className="mt-2 text-sm text-gray-600">Tell us briefly about your project and we'll prepare scope & timeline options.</p>

              <dl className="mt-4 text-sm text-gray-600 space-y-2">
                <div><dt className="font-medium">Lead contact</dt><dd>Project Manager — <span className="font-semibold">(303) 884-2918</span></dd></div>
                <div><dt className="font-medium">Email</dt><dd>quote@luxeglass.pro</dd></div>
                <div><dt className="font-medium">Office</dt><dd>Denver, CO • US-based coordination</dd></div>
              </dl>

              <a href="#contact" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Start a conversation</a>
            </aside>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-28">
          <h2 className="text-2xl font-bold">Contact & Request Quote</h2>
          <p className="mt-2 text-sm text-gray-600">
            Prefer direct contact? Email or phone listed below — or use the quick form to request a project quote.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="space-y-4">
              <label className="block text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 block w-full border px-3 py-2 rounded-md" placeholder="Your name" />

              <label className="block text-sm font-medium">Email</label>
              <input name="email" type="email" required className="mt-1 block w-full border px-3 py-2 rounded-md" placeholder="Your email" />

              <label className="block text-sm font-medium">Phone</label>
              <input name="phone" className="mt-1 block w-full border px-3 py-2 rounded-md" placeholder="Your phone" />

              <label className="block text-sm font-medium">Project Type</label>
              <input name="project_type" className="mt-1 block w-full border px-3 py-2 rounded-md" placeholder="Resin Table, Tub, Sink, Shower, etc." />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium">Project Details</label>
              <textarea
                name="message"
                required
                className="mt-1 block w-full border px-3 py-2 rounded-md"
                rows="6"
                placeholder="Short description, timeline, measurements, location, quantity, budget, etc."
              />

              {/* NEW FIELD – Google Drive / Dropbox link */}
              <label className="block text-sm font-medium">Project File Link (Google Drive, Dropbox, etc.)</label>
              <input
                name="project_file_link"
                type="url"
                placeholder="https://drive.google.com/... or https://www.dropbox.com/..."
                className="mt-1 block w-full border px-3 py-2 rounded-md"
              />

              <div className="flex items-center gap-4 mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md relative flex items-center"
                >
                  {loading && (
                    <span className="loader mr-2" ref={spinnerRef}>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                    </span>
                  )}
                  Send Request
                </button>

                {statusMessage && (
                  <span ref={statusRef} className="transition-opacity duration-500 text-sm">
                    {statusMessage}
                  </span>
                )}
              </div>
            </div>
          </form>

          <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold">Direct Contact</h3>
            <p className="mt-2 text-sm text-gray-600">
              We respond to project inquiries during business hours. Include timeline & approximate scope for accurate quoting.
            </p>
            <div className="mt-4 text-sm space-y-2">
              <div><strong>Phone:</strong> (303) 884-2918</div>
              <div><strong>Email:</strong> quote@luxeglass.pro</div>
              <div><strong>Address:</strong> Denver, CO (US-based coordination)</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-200 mt-12">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="font-semibold text-white">Luxe Glass Colorado</div>
              <div className="text-sm mt-2">High-end architectural materials — Developed for the North American market.</div>
            </div>

            <div className="text-sm">
              <div>Phone: (303) 884-2918</div>
              <div>Email: quote@luxeglass.pro</div>
              <div className="mt-2 text-xs text-gray-400">© {new Date().getFullYear()} Luxe Glass Colorado. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
