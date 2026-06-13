import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { servicesData } from "../data";
import { Service } from "../types";
import { 
  Network, Headphones, Radio, Shield, Laptop, Server, 
  Sun, Check, ChevronRight, HelpCircle, ArrowRight 
} from "lucide-react";

interface ServicesExplorerProps {
  onServiceSelect: (customMessage: string) => void;
}

export default function ServicesExplorer({ onServiceSelect }: ServicesExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeExpandedCard, setActiveExpandedCard] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Solutions", icon: ChevronRight },
    { id: "network", label: "Network Architecture", icon: Network },
    { id: "managed", label: "Managed Support", icon: Headphones },
    { id: "iot", label: "Smart Home & IoT", icon: Shield },
    { id: "telecom", label: "Telecom & VoIP", icon: Radio },
    { id: "products", label: "IT Hardware/CCTV", icon: Laptop },
    { id: "server", label: "Server & Storage", icon: Server },
    { id: "solar", label: "Solar Energy", icon: Sun }
  ];

  const filteredServices = selectedCategory === "all" 
    ? servicesData 
    : servicesData.filter(s => s.category === selectedCategory);

  const getIcon = (cat: string) => {
    switch(cat) {
      case "network": return <Network className="w-6 h-6 text-cyan-400" />;
      case "managed": return <Headphones className="w-6 h-6 text-teal-400" />;
      case "iot": return <Shield className="w-6 h-6 text-indigo-400" />;
      case "telecom": return <Radio className="w-6 h-6 text-violet-400" />;
      case "products": return <Laptop className="w-6 h-6 text-blue-400" />;
      case "server": return <Server className="w-6 h-6 text-sky-400" />;
      case "solar": return <Sun className="w-6 h-6 text-amber-400" />;
      default: return <ChevronRight className="w-6 h-6 text-slate-400" />;
    }
  };

  const handleCardCta = (service: Service) => {
    const customMsg = `Hello Netmusk! I want to enquire regarding your "${service.title}" category. I am particularly interested in setup advice and service rates for these components. Please reach back to me.`;
    onServiceSelect(customMsg);
  };

  return (
    <div id="services-explorer-parent" className="space-y-8">
      {/* Dynamic Tab Filter Bar */}
      <div className="flex flex-wrap justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              id={`cat-tab-${cat.id}`}
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                isSelected
                  ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/10"
                  : "bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/80"
              }`}
            >
              <IconComponent className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid displays */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
            const isExpanded = activeExpandedCard === service.id;
            return (
              <motion.div
                id={`service-card-${service.id}`}
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-slate-900/50 hover:bg-slate-900 border transition-all duration-300 rounded-3xl overflow-hidden p-6 shadow-xl flex flex-col justify-between group ${
                  isExpanded 
                    ? "border-cyan-500/50 md:col-span-2 shadow-cyan-500/5" 
                    : "border-slate-800 hover:border-slate-700/80"
                }`}
              >
                <div className="space-y-4">
                  {/* Card Icon & Category Label */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800/80">
                      {getIcon(service.category)}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                      {service.category} SPEC
                    </span>
                  </div>

                  {/* Text copies */}
                  <div>
                    <h4 className="text-lg font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bullet points mapping */}
                  <div className="pt-3 border-t border-slate-800/60 space-y-2">
                    <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest block mb-2">
                      Core Operations
                    </span>
                    {(isExpanded ? service.bulletPoints : service.bulletPoints.slice(0, 3)).map((bp, bpIdx) => (
                      <div key={bpIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{bp}</span>
                      </div>
                    ))}
                    {!isExpanded && service.bulletPoints.length > 3 && (
                      <button
                        onClick={() => setActiveExpandedCard(service.id)}
                        className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 text-left block pt-1 hover:underline cursor-pointer"
                      >
                        + View {service.bulletPoints.length - 3} more capabilities...
                      </button>
                    )}
                  </div>

                  {/* Full detailed description rendering on expansion */}
                  {isExpanded && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-slate-950/80 p-4 rounded-xl text-xs text-slate-300 space-y-1.5 border border-slate-800 leading-normal"
                    >
                      <span className="font-semibold text-slate-200">Executive Summary:</span>
                      <p className="leading-relaxed text-slate-400">{service.fullDesc}</p>
                      <button
                        onClick={() => setActiveExpandedCard(null)}
                        className="text-[10px] font-mono text-slate-500 hover:text-white mt-1 underline block cursor-pointer"
                      >
                        Collapse specifications
                      </button>
                    </motion.div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between gap-2">
                  <button
                    id={`btn-card-inquire-${service.id}`}
                    onClick={() => handleCardCta(service)}
                    className="py-2 px-4 bg-slate-950 group-hover:bg-cyan-500 text-slate-400 group-hover:text-slate-950 font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 hover:scale-[1.02] cursor-pointer"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:text-slate-950 transition-colors" />
                  </button>

                  <span className="text-[10px] text-slate-500 font-mono tracking-tighter">
                    Verified Solution
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
