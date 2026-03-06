import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Property Buying Advisory",
      marathi: "मालमत्ता खरेदी सल्लागार",
      description: "Independent guidance for home buyers to ensure safe investments and clear titles.",
      icon: <ShieldCheck className="w-6 h-6 text-navy" />
    },
    {
      title: "Property Selling Advisory",
      marathi: "मालमत्ता विक्री सल्लागार",
      description: "Expert advice on pricing, documentation, and procedures for selling your property.",
      icon: <ArrowRight className="w-6 h-6 text-navy" />
    },
    {
      title: "Legal & Documentation Guidance",
      marathi: "कायदेशीर आणि दस्तऐवजीकरण मार्गदर्शन",
      description: "Detailed verification of property papers, agreements, and registration processes.",
      icon: <FileText className="w-6 h-6 text-navy" />
    },
    {
      title: "Land & Plot Consultancy",
      marathi: "जमीन आणि भूखंड सल्लागार",
      description: "Specialized advisory for purchasing or developing land and residential plots.",
      icon: <MapPin className="w-6 h-6 text-navy" />
    },
    {
      title: "Government Approval Guidance",
      marathi: "सरकारी मंजुरी मार्गदर्शन",
      description: "Navigating complex government procedures and obtaining necessary permissions.",
      icon: <CheckCircle2 className="w-6 h-6 text-navy" />
    },
    {
      title: "Property Investment Advisory",
      marathi: "मालमत्ता गुंतवणूक सल्लागार",
      description: "Strategic planning for long-term wealth creation through real estate assets.",
      icon: <TrendingUp className="w-6 h-6 text-navy" />
    },
    {
      title: "NRI Real Estate Advisory",
      marathi: "अनिवासी भारतीय (NRI) रिअल इस्टेट सल्लागार",
      description: "Dedicated support for NRIs to manage, buy, or sell properties in India remotely.",
      icon: <Users className="w-6 h-6 text-navy" />
    },
    {
      title: "Second Opinion Consultation",
      marathi: "द्वितीय मत सल्लामसलत",
      description: "A neutral expert review of your current property deals or legal documents.",
      icon: <Clock className="w-6 h-6 text-navy" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER / NAVBAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <nav className="container-wide flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy flex items-center justify-center text-white font-bold text-xl rounded-sm">S</div>
            <div>
              <h1 className={`font-bold text-lg leading-none ${isScrolled ? 'text-navy' : 'text-navy'}`}>SONUSHA</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Realty Consulting</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-navy transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium hover:text-navy transition-colors">About</a>
            <a href="#services" className="text-sm font-medium hover:text-navy transition-colors">Services</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-navy transition-colors">How It Works</a>
            <a href="#contact" className="text-sm font-medium hover:text-navy transition-colors">Contact</a>
            <a 
              href="#book" 
              className="bg-navy text-white px-6 py-2.5 text-sm font-semibold rounded-sm hover:bg-opacity-90 transition-all"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-navy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-lg p-6 flex flex-col gap-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">Services</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">How It Works</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">Contact</a>
            <a 
              href="#book" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-navy text-white text-center py-3 font-semibold rounded-sm"
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-40 pb-24 md:pt-56 md:pb-40 bg-slate-50 overflow-hidden">
        <div className="container-wide px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-bold tracking-widest uppercase mb-6 border-l-2 border-navy">
              Independent Real Estate Advisory
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-navy leading-[1.1] mb-6">
              SONUSHA <br /> Realty Consulting
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 font-light italic mb-8 border-l-4 border-gray-200 pl-6">
              "Clarity Before You Commit"
            </p>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              With over 30 years of experience, we provide independent, unbiased real estate advisory services to help you make safe and informed property decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#book" 
                className="bg-navy text-white px-8 py-4 text-center font-bold rounded-sm hover:bg-opacity-90 transition-all shadow-lg"
              >
                Book Consultation
              </a>
              <a 
                href="https://wa.me/919823050136" 
                target="_blank"
                rel="noreferrer"
                className="bg-white text-navy border border-gray-200 px-8 py-4 text-center font-bold rounded-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="text-whatsapp" />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 transform translate-x-1/2 hidden lg:block"></div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding border-b border-gray-100">
        <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-xs font-bold text-navy uppercase tracking-[0.2em] mb-4">Our Legacy</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">30+ Years of Trusted Expertise</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                SONUSHA Realty Consulting was founded on the principles of transparency and integrity. In an industry often clouded by sales targets and commissions, we stand apart as independent advisors.
              </p>
              <p>
                Our strength lies in our deep-rooted network within government departments and our comprehensive understanding of property laws and procedures. We help you navigate the complexities of real estate without any conflict of interest.
              </p>
              <div className="bg-navy p-8 text-white rounded-sm">
                <p className="text-xl font-medium italic mb-2">"We guide. We do not sell property."</p>
                <p className="text-sm opacity-80">Our only interest is your safety and peace of mind.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-8 flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-bold text-navy mb-2">30+</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">Years Exp.</span>
            </div>
            <div className="bg-navy p-8 flex flex-col justify-center items-center text-center text-white">
              <ShieldCheck size={32} className="mb-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">100% Independent</span>
            </div>
            <div className="bg-navy p-8 flex flex-col justify-center items-center text-center text-white">
              <FileText size={32} className="mb-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">Legal Precision</span>
            </div>
            <div className="bg-slate-50 p-8 flex flex-col justify-center items-center text-center">
              <Users size={32} className="text-navy mb-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">Client Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section-padding bg-navy text-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <h3 className="text-xs font-bold text-white/60 uppercase tracking-[0.2em] mb-4">Who We Help</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tailored Advisory for Every Need</h2>
            <p className="text-white/70 text-lg">We provide clarity to anyone navigating the real estate landscape, ensuring you never make a decision in the dark.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "First-time home buyers",
              "Property owners",
              "Land and plot owners",
              "Real estate investors",
              "NRIs (Non-Resident Indians)",
              "Anyone confused about property decisions"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 border border-white/10 hover:bg-white/5 transition-colors">
                <CheckCircle2 className="text-white/40 shrink-0 mt-1" size={20} />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-xs font-bold text-navy uppercase tracking-[0.2em] mb-4">Our Services</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Comprehensive Real Estate Advisory</h2>
            <p className="text-slate-600">Specialized guidance across all property-related matters, available in both English and Marathi.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-10 hover:bg-slate-50 transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h4 className="text-xl font-bold text-navy mb-1">{service.title}</h4>
                <p className="text-sm font-semibold text-slate-400 mb-4 italic">{service.marathi}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-xs font-bold text-navy uppercase tracking-[0.2em] mb-4">The Process</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book a consultation", desc: "Schedule a time that works for you via our form or WhatsApp." },
              { step: "02", title: "Explain your situation", desc: "Share your property details, concerns, or the documents you need reviewed." },
              { step: "03", title: "Receive clear guidance", desc: "Get unbiased, expert advice based on 30+ years of experience." },
              { step: "04", title: "Take a safe decision", desc: "Proceed with confidence knowing you have the full picture." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-navy/5 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-navy mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION BOOKING SECTION */}
      <section id="book" className="section-padding">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-2xl flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/3 bg-navy p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Request a Consultation</h2>
                <p className="text-white/70 mb-8">Fill out the form and our advisor will get back to you within 24 hours.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-white/60" />
                  <span>+91 9823050136</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-white/60" />
                  <span>info@sonusha.com</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-12">
              <form className="grid sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Name</label>
                  <input type="text" className="border-b border-gray-300 py-2 focus:border-navy outline-none transition-colors" placeholder="Your Full Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Phone</label>
                  <input type="tel" className="border-b border-gray-300 py-2 focus:border-navy outline-none transition-colors" placeholder="Mobile Number" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">City</label>
                  <input type="text" className="border-b border-gray-300 py-2 focus:border-navy outline-none transition-colors" placeholder="Your City" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Property Type</label>
                  <select className="border-b border-gray-300 py-2 focus:border-navy outline-none transition-colors bg-transparent">
                    <option>Residential Flat</option>
                    <option>Land / Plot</option>
                    <option>Commercial Property</option>
                    <option>Agricultural Land</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Message</label>
                  <textarea rows={3} className="border-b border-gray-300 py-2 focus:border-navy outline-none transition-colors resize-none" placeholder="Briefly describe your property situation"></textarea>
                </div>
                <div className="sm:col-span-2 pt-4">
                  <button className="w-full bg-navy text-white py-4 font-bold rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm">
                    Request Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-slate-50 border-t border-gray-200">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-bold text-navy mb-6">Office Address</h4>
              <div className="flex items-start gap-4 text-slate-600">
                <MapPin className="shrink-0 mt-1 text-navy" size={20} />
                <p>16, 2nd Floor,Sathe Baug, <br />Above IDBI Bank, <br />Nashik, Maharashtra - 422001</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy mb-6">Contact Details</h4>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-center gap-4">
                  <Phone className="text-navy" size={20} />
                  <span>+91 9823050136</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle className="text-whatsapp" size={20} />
                  <span>+91 9823050136 (WhatsApp)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-navy" size={20} />
                  <span>info@sonusha.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy mb-6">Location</h4>
              <div className="w-full h-48 bg-gray-200 rounded-sm overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {/* Placeholder for Google Maps Embed */}
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs text-center p-4">
                  Google Maps Embed Placeholder<br />(Location: Pune, Maharashtra)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / DISCLAIMER */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container-wide px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 bg-navy flex items-center justify-center text-white font-bold text-sm rounded-sm">S</div>
              <h1 className="font-bold text-sm leading-none text-navy uppercase tracking-widest">SONUSHA Realty Consulting</h1>
            </div>
            <div className="bg-slate-50 p-6 rounded-sm mb-8 text-xs text-slate-500 leading-relaxed max-w-2xl mx-auto">
              <p className="font-bold uppercase mb-2 text-slate-700 tracking-wider">Legal Disclaimer</p>
              SONUSHA Realty Consulting provides independent advisory services only. The firm does not act as a property broker, agent, or developer. All guidance is based on professional experience and available information. Clients are advised to perform their own due diligence before any financial commitment.
            </div>
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} SONUSHA Realty Consulting. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/919823050136" 
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-whatsapp text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-navy text-xs font-bold py-2 px-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          Chat with an Advisor
        </span>
      </a>
    </div>
  );
}
