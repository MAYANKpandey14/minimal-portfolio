import {
  Check,
  MapPin,
  Mail,
  Phone,
  Globe,
  Printer,
  Server,
  RefreshCw,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Proposal = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-zinc-500 selection:text-white pb-20 print:p-0">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-display { font-family: 'Instrument Serif', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }

        @media print {
          @page { margin: 10mm; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
        
        .section-fade {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div id="proposal-content">
        {/* Header / Cover */}
        <header className="max-w-4xl mx-auto pt-28 pb-12 px-6 md:px-12 section-fade">
          <div className="flex justify-between items-start flex-col md:flex-row gap-8">
            <div>
              <p className="text-sm tracking-widest uppercase text-zinc-400 font-medium mb-4">
                Web Development Proposal
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
                Shopify Store <br />
                <span className="text-zinc-400 opacity-60">Development.</span>
              </h1>
              <div className="flex flex-col gap-1 text-sm text-zinc-400">
                <p>Date: <span className="text-white font-medium">January 14, 2026</span></p>
                <p>Valid Until: <span className="text-white font-medium">February 14, 2026</span></p>
                <a
                  href="https://mayankpandey.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-display text-lg text-zinc-400 hover:text-white transition-colors italic opacity-70 hover:opacity-100"
                >
                  by Mayank Pandey
                </a>
              </div>
            </div>

            {/* Snapshot Card */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-sm w-full md:w-auto min-w-[280px] break-inside-avoid">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Total Investment</p>
                  <p className="font-display text-3xl font-bold">₹40,000</p>
                  <p className="text-xs text-zinc-400">One-time Development Fee</p>
                </div>
                <div className="h-px bg-zinc-800 w-full"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Timeline</p>
                    <p className="font-medium">3-4 Weeks</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Support</p>
                    <p className="font-medium">Included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 md:px-12 space-y-24">
          {/* What's Included Grid */}
          <section className="section-fade [animation-delay:100ms]">
            <h2 className="font-display text-3xl font-semibold mb-10 border-b border-zinc-800 pb-4">What's Included</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {/* A */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-xl font-bold bg-zinc-800 text-white w-8 h-8 flex items-center justify-center rounded-full">A</span>
                  <h3 className="font-display text-xl font-medium">Platform & Store Setup</h3>
                </div>
                <ul className="space-y-3 text-zinc-400 pl-2">
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Shopify Basic Plan integration and configuration
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Store domain setup assistance (domain purchased separately)
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Complete store configuration & optimization
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    SSL/HTTPS security implementation
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Backup & disaster recovery setup
                  </li>
                </ul>
              </div>

              {/* B */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-xl font-bold bg-zinc-800 text-white w-8 h-8 flex items-center justify-center rounded-full">B</span>
                  <h3 className="font-display text-xl font-medium">Website Design & Branding</h3>
                </div>
                <ul className="space-y-3 text-zinc-400 pl-2">
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Minimal, clean design optimized for conversions
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Fully mobile-responsive layout (tested on all devices)
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Logo integration & professional typography
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    <strong>5-7 Essential Pages:</strong> Home, Products, About, Contact, Policies
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Product gallery with image optimization
                  </li>
                </ul>
              </div>
            </div>

            {/* Second grid (C, D, E) - starts on new page for print */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 break-before-page mt-16">
              {/* C */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-xl font-bold bg-zinc-800 text-white w-8 h-8 flex items-center justify-center rounded-full">C</span>
                  <h3 className="font-display text-xl font-medium">E-Commerce Functionality</h3>
                </div>
                <ul className="space-y-3 text-zinc-400 pl-2">
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Product catalog setup (up to 50 products)
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Organization into 5 collections/categories
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Advanced shopping cart with persistent storage
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Automated confirmation emails & Inventory tracking
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Review & rating system implementation
                  </li>
                </ul>
              </div>

              {/* D */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-xl font-bold bg-zinc-800 text-white w-8 h-8 flex items-center justify-center rounded-full">D</span>
                  <h3 className="font-display text-xl font-medium">WhatsApp for Payment & Support</h3>
                </div>
                <ul className="space-y-3 text-zinc-400 pl-2">
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Floating "Chat with Us" WhatsApp button
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Direct "Inquire on WhatsApp" link on product pages
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Direct customer support communication channel
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Payment collection via WhatsApp (UPI/QR Code sharing)
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Manual order confirmation & receipt generation
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Info className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Can be upgraded and automated easily in future
                  </li>
                </ul>
              </div>

              {/* E - Full width section */}
              <div className="space-y-4 col-span-1 md:col-span-2 pt-8 border-t border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-xl font-bold bg-zinc-800 text-white w-8 h-8 flex items-center justify-center rounded-full">E</span>
                  <h3 className="font-display text-xl font-medium">Additional Features</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-zinc-400 pl-2">
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    SEO optimization (meta tags, descriptions)
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    XML sitemap generation
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Mobile performance optimization
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Check className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    Basic security audit
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Implementation Timeline */}
          <section className="section-fade [animation-delay:200ms] break-before-page">
            <h2 className="font-display text-3xl font-semibold mb-10 border-b border-zinc-800 pb-4">
              Implementation Timeline
            </h2>

            <div className="relative border-l border-zinc-800 ml-4 space-y-12">
              {/* Week 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-white rounded-full ring-4 ring-[#09090b]"></div>
                <h3 className="font-display text-lg font-medium mb-1">Week 1: Planning & Setup</h3>
                <p className="text-sm text-zinc-400 mb-3">Foundational work and configuration.</p>
                <ul className="space-y-2">
                  <li className="text-sm text-zinc-400 grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-medium text-white">Day 1-2</span>
                    <span>Project kickoff & requirements validation</span>
                  </li>
                  <li className="text-sm text-zinc-400 grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-medium text-white">Day 3-4</span>
                    <span>Domain registration & Shopify store creation</span>
                  </li>
                  <li className="text-sm text-zinc-400 grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-medium text-white">Day 5</span>
                    <span>Theme selection & configuration</span>
                  </li>
                </ul>
              </div>

              {/* Week 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-zinc-600 rounded-full ring-4 ring-[#09090b]"></div>
                <h3 className="font-display text-lg font-medium mb-1">Week 2: Design & Product Setup</h3>
                <p className="text-sm text-zinc-400 mb-3">Content integration and visual design.</p>
                <ul className="space-y-2">
                  <li className="text-sm text-zinc-400 grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-medium text-white">Day 6-7</span>
                    <span>Page creation (Home, Policies, Contact)</span>
                  </li>
                  <li className="text-sm text-zinc-400 grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-medium text-white">Day 8-9</span>
                    <span>Product upload & collection organization</span>
                  </li>
                  <li className="text-sm text-zinc-400 grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-medium text-white">Day 10</span>
                    <span>WhatsApp Chat button configuration</span>
                  </li>
                </ul>
              </div>

              {/* Week 3 */}
              <div className="relative pl-8">
                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-zinc-600 rounded-full ring-4 ring-[#09090b]"></div>
                <h3 className="font-display text-lg font-medium mb-1">Week 3: Integration & Launch</h3>
                <p className="text-sm text-zinc-400 mb-3">Testing, training and deployment.</p>
                <ul className="space-y-2">
                  <li className="text-sm text-zinc-400 grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-medium text-white">Day 11-12</span>
                    <span>Payment gateway setup & checkout testing</span>
                  </li>
                  <li className="text-sm text-zinc-400 grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-medium text-white">Day 13</span>
                    <span>QA & End-to-end testing</span>
                  </li>
                  <li className="text-sm text-zinc-400 grid grid-cols-[80px_1fr] gap-4">
                    <span className="font-medium text-white">Day 14-15</span>
                    <span>Training, Handover & Live Deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Financial Structure */}
          <section className="section-fade [animation-delay:300ms]">
            <h2 className="font-display text-3xl font-semibold mb-10 border-b border-zinc-800 pb-4">
              Financial Structure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Development Fee */}
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-sm flex flex-col justify-between break-inside-avoid">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-display text-lg font-medium text-white">Development Fee</h3>
                    <span className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                      One-Time
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm group">
                      <span className="text-zinc-400 group-hover:text-white transition-colors">
                        Shopify Store Setup & Dev
                      </span>
                      <span className="font-medium">₹40,000</span>
                    </div>
                    <div className="flex justify-between items-center text-sm group">
                      <span className="text-zinc-400 group-hover:text-white transition-colors">
                        Implementation & Integration
                      </span>
                      <span className="font-medium text-white bg-zinc-800 px-2 py-0.5 rounded text-xs">
                        Included
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm group">
                      <span className="text-zinc-400 group-hover:text-white transition-colors">
                        30-Day Post-Launch Support
                      </span>
                      <span className="font-medium text-white bg-zinc-800 px-2 py-0.5 rounded text-xs">
                        Included
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="h-px bg-zinc-800 my-6"></div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium block mb-1">
                        Total Investment
                      </span>
                      <span className="text-[10px] text-zinc-500">Taxes may apply</span>
                    </div>
                    <span className="font-display font-bold text-3xl">₹40,000</span>
                  </div>
                </div>
              </div>

              {/* Recurring Costs */}
              <div className="bg-[#09090b] p-6 rounded-2xl border-2 border-dashed border-zinc-800 relative group hover:border-zinc-700 transition-colors">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <RefreshCw className="w-24 h-24 text-white" />
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-lg font-medium mb-1 text-white">Recurring Monthly Costs</h3>
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    (Client Responsibility)
                  </p>
                </div>

                <div className="space-y-5 relative z-10">
                  {/* Item 1 */}
                  <div className="flex justify-between items-start text-sm">
                    <div className="flex gap-3">
                      <div className="mt-0.5 bg-zinc-900 p-1.5 rounded-lg border border-zinc-800 shadow-sm h-fit">
                        <Server className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      <div>
                        <span className="font-bold text-white block text-sm">Shopify Basic Plan</span>
                        <span className="text-[10px] text-zinc-400 mt-0.5 block">
                          Hosting, SSL, CDN included
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-white block">
                        ₹20<span className="text-[10px] font-normal text-zinc-400">/mo</span>
                      </span>
                      <span className="text-[10px] text-zinc-400">then ₹1,994/mo</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex justify-between items-start text-sm">
                    <div className="flex gap-3">
                      <div className="mt-0.5 bg-zinc-900 p-1.5 rounded-lg border border-zinc-800 shadow-sm h-fit">
                        <Globe className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      <div>
                        <span className="font-bold text-white block text-sm">Domain Name</span>
                        <span className="text-[10px] text-zinc-400 mt-0.5 block">Annual renewal cost</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-white block">
                        ~₹250<span className="text-[10px] font-normal text-zinc-400">/mo</span>
                      </span>
                      <span className="text-[10px] text-zinc-400">billed yearly (~₹3k)</span>
                    </div>
                  </div>

                  {/* Total Box */}
                  <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 shadow-sm mt-2 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-16 h-16 bg-gradient-to-br from-transparent to-zinc-800 rounded-bl-full -mr-4 -mt-4"></div>
                    <div className="flex justify-between items-center mb-1 relative z-10">
                      <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">
                        Est. Monthly Total
                      </span>
                      <span className="font-display font-bold text-xl text-white">
                        ~₹2,250<span className="text-sm text-zinc-400 font-normal">/mo</span>
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-400 leading-tight relative z-10">
                      * Standard rates apply after promotional period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Terms & Next Steps */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 section-fade break-before-page">
            {/* Terms */}
            <div>
              <h2 className="font-display text-2xl font-semibold mb-6 border-b border-zinc-800 pb-4">
                Terms & Conditions
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm mb-2 text-white">Payment Terms</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Development begins upon receipt of 50% advance payment. The final 50% is due before the store goes live.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2 text-white">Content & Assets</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Client to provide logo, product images/descriptions, and branding guidelines. Timeline assumes timely feedback.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2 text-white">Revisions</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Unlimited design revisions during dev. Up to 5 rounds of major changes. Additional revisions at ₹2,000/round.
                  </p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <h2 className="font-display text-2xl font-semibold mb-6 border-b border-zinc-800 pb-4">Next Steps</h2>
              <div className="space-y-0">
                <div className="flex gap-4 pb-6 border-l border-zinc-800 pl-6 relative">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-white rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-sm text-white">1. Review & Approval</h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      Review this proposal and ask any questions regarding scope.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 pb-6 border-l border-zinc-800 pl-6 relative">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-zinc-600 rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-sm text-white">2. Agreement & Payment</h4>
                    <p className="text-sm text-zinc-400 mt-1">Sign proposal and submit 50% advance payment.</p>
                  </div>
                </div>
                <div className="flex gap-4 pb-6 border-l border-zinc-800 pl-6 relative">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-zinc-600 rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-sm text-white">3. Kickoff & Development</h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      We schedule requirements gathering and begin the 3-4 week build.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 border-l border-transparent pl-6 relative">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-zinc-600 rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-sm text-white">4. Launch</h4>
                    <p className="text-sm text-zinc-400 mt-1">Go-live followed by 30 days of included support.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer / Contact */}
          <footer className="mt-24 pt-12 border-t border-zinc-800 section-fade">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div>
                <h2 className="font-display text-3xl font-semibold mb-4">Ready to start?</h2>
                <p className="text-zinc-400 mb-8 max-w-sm text-sm">
                  Thank you for considering our proposal. We're excited to help scale your business through a
                  professional e-commerce presence.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-zinc-500" />
                    <span>Moradabad, Uttar Pradesh, India</span>
                  </div>
                  <a
                    href="mailto:mayankpandeyofficial404@gmail.com"
                    className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-zinc-500" />
                    <span>mayankpandeyofficial404@gmail.com</span>
                  </a>
                  <a
                    href="tel:+917505728099"
                    className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-zinc-500" />
                    <span>+91 7505728099</span>
                  </a>
                  <a
                    href="https://mayankpandey.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4 text-zinc-500" />
                    <span>mayankpandey.vercel.app</span>
                  </a>
                </div>
              </div>

              <div className="flex justify-start md:justify-end">
                <div className="text-right">
                  <p className="text-xs text-zinc-500 mb-2">Valid for 30 days from issuance</p>
                  <Button
                    onClick={() => window.print()}
                    variant="outline"
                    className="no-print border-zinc-800 text-white hover:bg-zinc-800 hover:text-white bg-zinc-900 min-w-[200px]"
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    Print / Save as PDF
                  </Button>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Proposal;
