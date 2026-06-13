import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Network, Headphones, Shield, Radio, Laptop, Server, 
  Sun, CheckCircle2, MapPin, Mail, Smartphone, Clock, 
  ArrowRight, ShieldCheck, Cpu, Cloud, Database, Sparkles, 
  MessageSquare, ChevronRight, Menu, X, ArrowUpRight, Award, Eye
} from "lucide-react";
import { contactDetails, reviews, stats } from "./data";
import ServicesExplorer from "./components/ServicesExplorer";
import EmailBackupEstimator from "./components/EmailBackupEstimator";
import SolarCalculator from "./components/SolarCalculator";
import InquiryForm from "./components/InquiryForm";

export default function App() {
  const [activeMenuOpen, setActiveMenuOpen] = useState(false);
  const [activeNotification, setActiveNotification] = useState<string | null>(
    "🔥 Special Offer: Free full enterprise IT infrastructure audits in progress for lucknow businesses. Schedule yours today!"
  );
  
  // High-performance state integration: Clicking items pre-fills the InquiryForm automatically!
  const [inquiryIntentMessage, setInquiryIntentMessage] = useState<string>("");
  
  const inquirySectionRef = useRef<HTMLDivElement>(null);
  const backupSectionRef = useRef<HTMLDivElement>(null);
  const solarSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    setActiveMenuOpen(false);
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const triggerInquiryWithContext = (msg: string) => {
    setInquiryIntentMessage(msg);
    // Smoothly roll users into the lead fields
    setTimeout(() => {
      scrollToSection(inquirySectionRef);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-[#f3f4f6] font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden relative">
      
      {/* Absolute Ambient Sphere Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-10 w-[450px] h-[450px] bg-amber-500/[0.02] rounded-full blur-[110px] pointer-events-none -z-10" />
      
      {/* Top Banner alert */}
      {activeNotification && (
        <div className="bg-gradient-to-r from-cyan-950/90 via-[#070b13] to-cyan-950/90 border-b border-cyan-500/10 text-center py-2.5 px-4 text-xs font-medium text-cyan-300 relative">
          <span className="inline-block leading-normal">{activeNotification}</span>
          <button 
            onClick={() => setActiveNotification(null)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-white transition-colors cursor-pointer font-mono font-bold ml-2 text-sm"
            aria-label="Close alert"
          >
            ×
          </button>
        </div>
      )}

      {/* Sticky Top Glass Navigation Bar */}
      <header className="sticky top-0 bg-[#070b13]/85 backdrop-blur-md border-b border-slate-900/80 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand Brandings */}
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-950/50 group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <div>
              <span className="font-display font-black tracking-wider text-xl text-white">
                NET<span className="text-cyan-400">MUSK</span>
              </span>
              <span className="block text-[8px] tracking-widest font-mono text-slate-500 uppercase -mt-1 font-bold">
                Pvt Ltd • Integrations
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              id="lnk-services" 
              onClick={() => scrollToSection(servicesSectionRef)} 
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors"
            >
              Solutions Hub
            </button>
            <button 
              id="lnk-backup" 
              onClick={() => scrollToSection(backupSectionRef)} 
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors"
            >
              Email Backup Simulator
            </button>
            <button 
              id="lnk-solar" 
              onClick={() => scrollToSection(solarSectionRef)} 
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors"
            >
              Solar ROI Tool
            </button>
            <button 
              id="lnk-about" 
              onClick={() => scrollToSection(aboutSectionRef)} 
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors"
            >
              Our Commitments
            </button>
            <button 
              id="lnk-contact" 
              onClick={() => scrollToSection(inquirySectionRef)} 
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors"
            >
              RFP & Support Desk
            </button>
          </nav>

          {/* Nav Quick action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+917985352092" 
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              +91 79853 52092
            </a>
            <button
              id="btn-nav-whatsapp"
              onClick={() => triggerInquiryWithContext("Hello Netmusk! I want to configure custom IT consulting details for my business.")}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 text-xs font-bold rounded-xl border border-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 font-bold" />
              <span>WhatsApp Live</span>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="md:hidden">
            <button
              id="btn-hamburger"
              onClick={() => setActiveMenuOpen(!activeMenuOpen)}
              className="p-2 border border-slate-800 rounded-xl hover:bg-slate-900 transition-colors cursor-pointer text-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {activeMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu pane */}
        <AnimatePresence>
          {activeMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-900 bg-[#070b13]/95 backdrop-blur-lg px-4 py-6 space-y-4"
            >
              <button 
                onClick={() => scrollToSection(servicesSectionRef)} 
                className="w-full text-left py-2.5 text-sm font-semibold text-slate-200 border-b border-slate-850 block cursor-pointer"
              >
                Solutions Hub
              </button>
              <button 
                onClick={() => scrollToSection(backupSectionRef)} 
                className="w-full text-left py-2.5 text-sm font-semibold text-slate-200 border-b border-slate-850 block cursor-pointer"
              >
                Email Backup Simulator
              </button>
              <button 
                onClick={() => scrollToSection(solarSectionRef)} 
                className="w-full text-left py-2.5 text-sm font-semibold text-slate-200 border-b border-slate-850 block cursor-pointer"
              >
                Solar ROI Tool
              </button>
              <button 
                onClick={() => scrollToSection(aboutSectionRef)} 
                className="w-full text-left py-2.5 text-sm font-semibold text-slate-200 border-b border-slate-850 block cursor-pointer"
              >
                Our Commitments
              </button>
              <button 
                onClick={() => scrollToSection(inquirySectionRef)} 
                className="w-full text-left py-2.5 text-sm font-semibold text-slate-200 block cursor-pointer"
              >
                Inquiry Support Desk
              </button>
              
              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href="tel:+917985352092" 
                  className="text-xs font-mono text-slate-400 pl-1"
                >
                  Hotline support: +91 79853 52092
                </a>
                <button
                  id="btn-m-whatsapp"
                  onClick={() => triggerInquiryWithContext("Hi Netmusk! I want to configure general support for my office IT networks.")}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold rounded-xl text-center text-xs uppercase tracking-wider block cursor-pointer"
                >
                  WhatsApp Live Desk
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section Container */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Background visual graphics */}
        <div className="absolute top-[10%] right-[5%] w-72 h-72 border border-cyan-500/5 rounded-full pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-96 h-96 border border-cyan-500/5 rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-left relative">
            
            {/* Tagline / micro badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-300" />
              <span>Netmusk Pvt Ltd • Leading Systems Integrator</span>
            </div>

            {/* Headline Display Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-none">
              Expert IT Solutions <br className="hidden sm:inline" /> 
              to Simplify & Scale <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400">
                Your Business Systems
              </span>
            </h1>

            {/* Long Sub-copy details */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Reliable IT services to boost your productivity and security. From comprehensive enterprise networks and proactively managed security support, to IoT automations, modernized telecoms, and solar installations under PM Surya Ghar yojana — we deliver turnkey, stress-free transformations.
            </p>

            {/* Call to action indicators */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                id="btn-hero-backup"
                onClick={() => scrollToSection(backupSectionRef)}
                className="py-4 px-6 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-550 text-slate-950 font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all duration-305 flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/10"
              >
                <span>Check Backup Tool</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                id="btn-hero-audit"
                onClick={() => triggerInquiryWithContext("Hi Netmusk Team! I would like to schedule a free comprehensive office IT architecture inspection audit. Please let me know available slots.")}
                className="py-4 px-6 bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 hover:border-slate-700 font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Free Audit</span>
                <Award className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Quick trust metrics lists */}
            <div className="pt-8 border-t border-slate-900 flex flex-wrap gap-x-10 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-xs text-slate-400">Secure AES-256 Backups</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal-400" />
                <span className="text-xs text-slate-400">PM Surya Ghar Subsidy Navigators</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-indigo-400" />
                <span className="text-xs text-slate-400">24/7 Priority Emergency Helpdesk</span>
              </div>
            </div>
          </div>

          {/* Right Bento Grid Stats Display Visual Mockup */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative grid grid-cols-2 gap-4">
              
              {/* Stat Card 1 */}
              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-cyan-500/25 transition-colors">
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/[0.02] rounded-full blur-xl pointer-events-none" />
                <span className="block text-3xl font-display font-extrabold text-white">150+</span>
                <span className="text-xs font-mono text-slate-500 uppercase mt-1 block font-semibold">Integrations Completed</span>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-teal-500/25 transition-colors">
                <div className="absolute top-0 right-0 w-20 h-20 bg-teal-400/[0.02] rounded-full blur-xl pointer-events-none" />
                <span className="block text-3xl font-display font-extrabold text-teal-400">100%</span>
                <span className="text-xs font-mono text-slate-500 uppercase mt-1 block font-semibold">Uptime SLA Target</span>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl relative overflow-hidden col-span-2 group hover:border-indigo-500/25 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-400/[0.02] rounded-full blur-xl pointer-events-none" />
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block text-xs font-semibold text-slate-300">Netmusk Lucknow Head Office</span>
                    <span className="block text-xs font-mono text-slate-500 mt-1">3/298 Viram Khand, Gomti Nagar</span>
                  </div>
                  <div className="p-2 bg-[#070b13] border border-slate-800 rounded-xl">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Mini Info banner */}
              <div className="bg-slate-950/90 border border-cyan-500/20 col-span-2 p-4 rounded-xl flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-[11px] text-slate-300 leading-normal">
                  <span className="font-bold text-white">Certified System Integrator:</span> Networking, Cisco Firewalls, Structured Cabling, Enterprise VoIP & Solar arrays.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Services Bento Hub Section */}
      <section id="services-section" ref={servicesSectionRef} className="py-20 md:py-28 bg-slate-950/40 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header Text */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block">
              Redefining Integration Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Structured Solutions & Products Portfolio
            </h2>
            <p className="text-slate-400 text-sm">
              As a full-spectrum system integrator, we deliver an extensive range of high-performance products coupled with expert deployment and 24/7 service layers.
            </p>
          </div>

          {/* Embedded filtered component explorer */}
          <ServicesExplorer onServiceSelect={triggerInquiryWithContext} />
        </div>
      </section>

      {/* "Back It Up" Interactive Email Backup Section */}
      <section id="backup-section" ref={backupSectionRef} className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Text panel description copy */}
          <div className="lg:col-span-4 space-y-6 pt-4 lg:sticky lg:top-24">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
              Critical Data Safekeeping
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              Easily Back Up <br />
              All Your Emails.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Disaster recovery planning isn't optional. Office mailboxes contain central operational contracts, records, and files. Our custom backup setups guarantee immediate restore points when things go south.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <div className="h-5 w-5 rounded bg-cyan-950/50 border border-cyan-800 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✔</div>
                <span>Google-Workspace API synchronization.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <div className="h-5 w-5 rounded bg-cyan-950/50 border border-cyan-800 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✔</div>
                <span>Secured locally partitioned NAS arrays.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <div className="h-5 w-5 rounded bg-cyan-950/50 border border-cyan-800 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✔</div>
                <span>Immediate 24/7 backup recovery desk.</span>
              </div>
            </div>
          </div>

          {/* Right Calculator Emulator block */}
          <div className="lg:col-span-8">
            <EmailBackupEstimator onBackUpSupportClick={triggerInquiryWithContext} />
          </div>
        </div>
      </section>

      {/* PM Surya Ghar Muft Bijli Yojana Solar Section */}
      <section id="solar-section" ref={solarSectionRef} className="py-20 md:py-28 bg-slate-950/30 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Embedded calculator on the left */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <SolarCalculator onSolarInquiryClick={triggerInquiryWithContext} />
            </div>

            {/* Structured Solar copy on the right */}
            <div className="lg:col-span-4 space-y-6 pt-4 order-1 lg:order-2 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/40 text-amber-400 border border-amber-900/40 rounded-full text-xs font-mono">
                <Sun className="w-3.5 h-3.5" />
                <span>Sustainable Energy India</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                Reduce Bills to Zero with Solar.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                With landmark initiatives like the PM Surya Ghar Muft Bijli Yojana under Indian Ministry schemes, adopting solar panels is more affordable than ever. Homeowners gain grid energy integration, substantial direct financial subsidies, and years of zero-cost power.
              </p>
              <div className="space-y-4 pt-2 border-t border-slate-900">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <span className="font-bold text-white block mb-0.5">Subsidy Navigation Support:</span>
                    We handle the full PM Surya Ghar documentation and claim processing directly so you skip structural bottlenecks.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <span className="font-bold text-white block mb-0.5">Standard Premium Components:</span>
                    Deploy high-efficiency mono-perc PV panels with tier-1 structural wiring warranties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Commitments, Mission, Vision) Panel */}
      <section id="about-section" ref={aboutSectionRef} className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block">
            Inside Netmusk Pvt Ltd
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Our Mission, Vision, & Commitments
          </h2>
          <p className="text-slate-400 text-sm">
            Forging dependable client partnerships of technological evolution across sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 lg:p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-500/20 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/[0.01] rounded-full blur-2xl pointer-events-none" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2 font-bold">
              Operational Mandate
            </span>
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              NETMUSK Pvt Ltd is dedicated to delivering a comprehensive range of IT integrated products and services. Our mission is to simplify technology for our clients and facilitate seamless technological transformations. As technology continues to evolve and profoundly impact every aspect of modern life, we remain steadfast in our commitment to leveraging these advancements for the benefit of our clients.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 lg:p-8 rounded-3xl relative overflow-hidden group hover:border-indigo-500/20 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/[0.01] rounded-full blur-2xl pointer-events-none" />
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2 font-bold">
              Future Objectives
            </span>
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Our vision is to be a trusted partner in technology integration, recognized for our commitment to excellence, innovation, and customer satisfaction. We aim to lead in the adoption of cutting-edge technologies that drive business growth and competitiveness in the digital age. By connecting devices, networks, solar matrices, and people, we deliver peace of mind.
            </p>
          </div>
        </div>

        {/* Customer Success Reviews / Testimonials panel */}
        <div className="mt-16 bg-slate-950/60 border border-slate-900/80 rounded-3xl p-6 lg:p-8">
          <div className="border-b border-slate-900 pb-4 mb-6 flex justify-between items-center flex-wrap gap-4">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest">
              What Lucknow Businesses Say
            </h4>
            <div className="flex gap-1.5 text-xs text-amber-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              <span className="text-slate-400 font-mono text-[11px] ml-1">5.0 rated on site assessments</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-slate-900/20 p-5 rounded-2xl border border-slate-800/60">
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{rev.text}"
                </p>
                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-white block">{rev.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{rev.company}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Lead Capture Panel */}
      <section id="inquiry-section" ref={inquirySectionRef} className="py-20 md:py-28 bg-[#090d16] border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block">
              Direct Channels Dispatch
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Launch Your Engineering Request
            </h2>
            <p className="text-slate-400 text-sm">
              Use the automated interactive form below to generate instant WhatsApp threads to our Lucknow developers or trigger official RFPs.
            </p>
          </div>

          {/* Inquiry form component embeds */}
          <InquiryForm 
            initialMessage={inquiryIntentMessage} 
            onFormSubmitSuccess={() => setInquiryIntentMessage("")}
          />
        </div>
      </section>

      {/* Deep Polished Footer details */}
      <footer className="bg-[#05070d] border-t border-slate-950 pt-16 pb-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-950">
          
          {/* Col 1 Brand detail */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-slate-950 font-bold" />
              </div>
              <span className="font-display font-black tracking-wider text-base text-white">
                NET<span className="text-cyan-400">MUSK</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              NETMUSK Pvt Ltd is a premium technology system integrator. We simplify infrastructure, secure communications, protect business databases and deliver clean Solar energy transitions under government initiatives.
            </p>
          </div>

          {/* Col 2 Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Solution Portals</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection(servicesSectionRef)} className="hover:text-cyan-300 text-left transition-colors cursor-pointer">
                  Network Auditing & Firewalls
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(servicesSectionRef)} className="hover:text-cyan-300 text-left transition-colors cursor-pointer">
                  Managed IT Helpdesk support
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(solarSectionRef)} className="hover:text-cyan-300 text-left transition-colors cursor-pointer">
                  Solar Panel Subsidy Estimations
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(backupSectionRef)} className="hover:text-cyan-300 text-left transition-colors cursor-pointer">
                  Interactive Email Backup Tools
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 Lucknow Address */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Netmusk Location</h4>
            <p className="text-slate-400 leading-normal">
              3/298 Viram Khand,<br />
              Gomti Nagar,<br />
              Lucknow - 226010
            </p>
            <div className="space-y-1">
              <span className="block font-mono text-[10px] text-slate-500">Contact coordinates:</span>
              <a href="mailto:sales@netmusk.com" className="hover:underline text-cyan-400 block font-semibold">sales@netmusk.com</a>
              <span className="block font-mono text-slate-300 font-medium">+91 7985352092</span>
            </div>
          </div>

          {/* Col 4 Hours & WhatsApp link */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Sales Desk Hours</h4>
            <div className="space-y-1 text-slate-400 text-[11px]">
              <div className="flex justify-between">
                <span>Mon - Sat:</span>
                <span className="font-mono text-slate-200">09:00 am – 05:00 pm</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            
            <a
              href="https://wa.me/917985352092"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-4 bg-emerald-950/35 hover:bg-emerald-900/30 text-emerald-400 border border-emerald-800/40 text-[11px] font-bold rounded-xl transition-all inline-flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Connect Live on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Closing elements */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <span>Copyright © 2025 Netmusk. All Rights Reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policies</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Integrators Terms</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
