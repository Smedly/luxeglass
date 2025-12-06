// Updated GlassProductsSite.jsx
// Incorporates: removal of placeholder products, updated materials, improved layout spacing,
// corrected scroll anchors, rewritten section text.

import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';

export default function GlassProductsSite() {
  const [selected, setSelected] = useState(null);

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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logos/luxe-glass-logo.webp" alt="Luxe Glass Logo" className="h-10 w-auto" />
            <div>
              <div className="font-semibold">Luxe Glass Colorado</div>
              <div className="text-xs text-gray-500">Architectural glass, marble & hand‑cast designer resin</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#products" className="hover:text-indigo-600">Products</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="mailto:quote@luxeglass.pro" className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">Request Quote</a>
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
                and hand‑cast designer resin. From sculptural statement pieces to functional architectural components,
                every project is engineered for longevity, precision and visual impact.
              </p>

              <div className="mt-6 flex gap-3">
                <a href="#contact" className="px-5 py-3 bg-indigo-600 text-white rounded-md font-medium">Request a Project Quote</a>
                <a href="#products" className="px-5 py-3 border rounded-md">View Selected Works</a>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-600">
                <li>Made‑to‑spec samples</li>
                <li>US‑based project manager</li>
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
              Custom‑crafted works in marble, glass, and hand‑cast designer resin.<br/>
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
                We focus exclusively on high‑end residential and commercial developments. Our processes align with
                developer timelines — sample approvals, mock‑ups, coordinated shipping, and accelerated production
                windows when required. COAs, load specs, and installation guidance are available for all projects.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="p-4 bg-gray-50 rounded-lg"><div className="font-semibold">US‑based PM</div><div className="text-sm text-gray-600 mt-1">Single point of contact for approvals & logistics.</div></li>
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
                <div><dt className="font-medium">Office</dt><dd>Denver, CO • US‑based coordination</dd></div>
              </dl>

              <a href="#contact" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Start a conversation</a>
            </aside>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" class="bg-gray-100 py-12">
          <div class="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
            <h2 class="text-3xl font-bold mb-6 text-center">Contact & Request Quote</h2>

            <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" class="space-y-4" enctype="multipart/form-data">
              <input type="hidden" name="access_key" value="831c26d9-9fa8-4b2d-b6e4-d4248267e967" />

              <div>
                <label class="block font-semibold mb-1">Name</label>
                <input type="text" name="name" required class="w-full p-2 border rounded-lg" placeholder="Full Name" />
              </div>

              <div>
                <label class="block font-semibold mb-1">Email</label>
                <input type="email" name="email" required class="w-full p-2 border rounded-lg" placeholder="Email Address" />
              </div>

              <div>
                <label class="block font-semibold mb-1">Phone</label>
                <input type="tel" name="phone" class="w-full p-2 border rounded-lg" placeholder="Phone Number" />
              </div>

              <div>
                <label class="block font-semibold mb-1">Project Type</label>
                <input type="text" name="project_type" class="w-full p-2 border rounded-lg" placeholder="Resin Table, Sink, Shower, etc." />
              </div>

              <div>
                <label class="block font-semibold mb-1">Project Details</label>
                <textarea name="message" rows="6" required class="w-full p-2 border rounded-lg" placeholder="Short description, timeline, measurements, location"></textarea>
              </div>

              <div>
                <label class="block font-semibold mb-1">Upload Files (optional)</label>
                <input type="file" name="file" class="w-full p-2 border rounded-lg" />
              </div>

              <button type="submit" class="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition flex justify-center items-center gap-2">
                <svg id="spinner" class="animate-spin h-5 w-5 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <span>Send Request</span>
              </button>

              <p id="form-status" class="text-center mt-4 text-lg font-semibold opacity-0 transition-opacity duration-700"></p>
            </form>

            <script>
              const form = document.getElementById('contact-form');
              const status = document.getElementById('form-status');
              const spinner = document.getElementById('spinner');

              form.addEventListener('submit', async (e) => {
                e.preventDefault();
                spinner.classList.remove('hidden');
                status.style.opacity = 1;
                status.textContent = "Sending...";
                status.className = "text-center mt-4 text-lg font-semibold text-gray-600 opacity-100 transition-opacity duration-700";

                const formData = new FormData(form);

                try {
                  const response = await fetch(form.action, { method: 'POST', body: formData });
                  const result = await response.json();

                  spinner.classList.add('hidden');

                  if (response.ok) {
                    status.textContent = "Your request was successfully sent.";
                    status.className = "text-center mt-4 text-lg font-semibold text-green-600 animate-pulse";
                    form.reset();
                  } else {
                    status.textContent = "Please try again.";
                    status.className = "text-center mt-4 text-lg font-semibold text-red-600 animate-pulse";
                  }
                } catch (error) {
                  spinner.classList.add('hidden');
                  status.textContent = "Please try again.";
                  status.className = "text-center mt-4 text-lg font-semibold text-red-600 animate-pulse";
                }
              });
            </script>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-gray-900 text-gray-200 mt-12">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="font-semibold text-white">Luxe Glass Colorado</div>
              <div className="text-sm mt-2">High‑end architectural materials — Developed for the North American market.</div>
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
