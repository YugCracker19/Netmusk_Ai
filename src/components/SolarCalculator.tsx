import React, { useState } from "react";
import { Sun, Leaf, Building2, HelpCircle, Check, Users, ArrowRight, IndianRupee } from "lucide-react";

interface SolarCalculatorProps {
  onSolarInquiryClick: (customMessage: string) => void;
}

export default function SolarCalculator({ onSolarInquiryClick }: SolarCalculatorProps) {
  const [propertyType, setPropertyType] = useState<"residential" | "commercial">("residential");
  const [monthlyBill, setMonthlyBill] = useState<number>(4500); // in INR
  const [roofSpace, setRoofSpace] = useState<number>(350); // in sq ft

  // Mathematical logic based on standard Indian solar installations and the PM Surya Ghar Scheme
  const recommendedCapacity = Math.min(
    Math.ceil(monthlyBill / 1500), // ~1.5 kW per 1500 Rs of bill
    Math.floor(roofSpace / 100) // 1 kW requires ~100 sq ft roof space
  ) || 1; // minimum 1 kW

  // Cost estimates: ~60,000 INR per kW in India
  const ratePerKw = propertyType === "residential" ? 65000 : 70000;
  const totalCost = recommendedCapacity * ratePerKw;

  // PM Surya Ghar Yojana Subsidy Math:
  // Rs 30,000 for 1kW
  // Rs 60,000 for 2kW
  // Rs 78,000 for 3kW or higher
  // Commercial properties don't get the residential subsidy, but get depreciation tax benefits
  let subsidy = 0;
  if (propertyType === "residential") {
    if (recommendedCapacity === 1) {
      subsidy = 30000;
    } else if (recommendedCapacity === 2) {
      subsidy = 60000;
    } else if (recommendedCapacity >= 3) {
      subsidy = 78000;
    }
  }

  const netCost = totalCost - subsidy;

  // Monthly electricity units generated: 1kW generates ~120 units (kWh) per month
  const unitRateInInr = 7.5; // Average grid electricity unit rate in INR
  const monthlyGenerationUnits = recommendedCapacity * 120;
  // Estimated monthly savings is the units generated times rate, capped by their current bill
  const estimatedMonthlySavings = Math.min(monthlyBill, monthlyGenerationUnits * unitRateInInr);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;

  // Payback period
  const paybackPeriodYears = (netCost / estimatedAnnualSavings).toFixed(1);

  // Carbon credits/offsets
  // 1 kW yields ~1.2 tons of CO2 offset annually
  const carbonOffsetTons = (recommendedCapacity * 1.2).toFixed(1);

  const handleInquiryMessage = () => {
    const customMsg = `Hello Netmusk! I want to consult about setting up highly efficient Solar Panels under the ${propertyType === 'residential' ? 'PM Surya Ghar Muft Bijli Yojana' : 'Commercial Solar Scheme'}. My average monthly bill is ₹${monthlyBill} with roof space of ${roofSpace} sq.ft. Recommended build: ${recommendedCapacity} kW. Please arrange an inspection.`;
    onSolarInquiryClick(customMsg);
  };

  return (
    <div id="solar-calculator-panel" className="bg-[#0f172a] border border-amber-500/20 rounded-3xl overflow-hidden p-6 lg:p-8 shadow-2xl relative">
      {/* Light highlights */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="border-b border-slate-800/80 pb-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
          <span className="text-xs font-mono px-3 py-1 bg-amber-950 text-amber-400 border border-amber-900 rounded-full inline-block">
            PM Surya Ghar Scheme Aligned
          </span>
          <div className="flex items-center gap-1.5 text-xs text-amber-400/80 font-mono">
            <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>Green Energy Transformation</span>
          </div>
        </div>
        <h3 className="text-2xl font-display font-semibold text-white">
          Solar Panel ROI & Subsidy Estimator
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          Harness the sun to reduce electricity costs to zero. Calculate potential government subsidies and amortization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Input Fields */}
        <div className="lg:col-span-6 space-y-6">
          {/* Property Select */}
          <div>
            <label className="block text-xs font-mono text-amber-300 uppercase tracking-widest mb-3">
              1. Project Connection Class
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                id="solar-prop-res"
                onClick={() => setPropertyType("residential")}
                className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium transition-all cursor-pointer ${
                  propertyType === "residential"
                    ? "bg-amber-950/40 border-amber-400 text-white shadow-lg"
                    : "bg-[#0b0f19] border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <Users className="w-4 h-4 text-amber-400" />
                <span>Household / Residential</span>
              </button>
              <button
                id="solar-prop-com"
                onClick={() => setPropertyType("commercial")}
                className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-medium transition-all cursor-pointer ${
                  propertyType === "commercial"
                    ? "bg-amber-950/40 border-amber-800 text-white"
                    : "bg-[#0b0f19] border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Corporate / Industrial</span>
              </button>
            </div>
          </div>

          {/* Average Bill Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                2. Average Monthly Power Bill
              </label>
              <span className="px-2.5 py-0.5 bg-slate-900 border border-slate-700 text-amber-400 rounded-md font-mono text-sm font-semibold">
                ₹ {monthlyBill.toLocaleString("en-IN")} / mo
              </span>
            </div>
            <input
              id="bill-slider"
              type="range"
              min="1000"
              max="30000"
              step="500"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>₹1,000</span>
              <span>₹15,000</span>
              <span>₹30,000</span>
            </div>
          </div>

          {/* Roof Space Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                3. Available Unobstructed Roof Area
              </label>
              <span className="px-2.5 py-0.5 bg-slate-900 border border-slate-700 text-amber-400 rounded-md font-mono text-sm font-semibold">
                {roofSpace} Sq. Ft.
              </span>
            </div>
            <input
              id="space-slider"
              type="range"
              min="100"
              max="2500"
              step="25"
              value={roofSpace}
              onChange={(e) => setRoofSpace(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>100 sq ft (1kW)</span>
              <span>1,200 sq ft</span>
              <span>2,500 sq ft (25kW)</span>
            </div>
          </div>

          {/* Scheme benefits details list */}
          <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl">
            <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase">Official Subsidy Rules (India)</span>
            <ul className="text-xs text-slate-300 space-y-1.5 list-inside list-disc">
              <li>1 kW residential plants get ₹30,000 direct subsidy.</li>
              <li>2 kW residential plants get ₹60,000 direct subsidy.</li>
              <li>3 kW & higher residential plants get maximum ₹78,000 subsidy.</li>
              <li>Saves an average of ₹1,000 per user on daily utility costs.</li>
            </ul>
          </div>
        </div>

        {/* Right Output Display */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="bg-[#0b0f19] rounded-2xl border border-slate-800/80 p-5 space-y-4 flex-grow">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
              Financial & Technical Analysis
            </h4>

            {/* Core calculations metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800">
                <span className="block text-[10px] text-slate-500 font-mono uppercase">System Capacity</span>
                <span className="text-lg font-display font-bold text-white mt-1 block">
                  {recommendedCapacity} kW
                </span>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800">
                <span className="block text-[10px] text-slate-500 font-mono uppercase">Required Panels</span>
                <span className="text-lg font-display font-bold text-white mt-1 block">
                  ~ {Math.ceil(recommendedCapacity * 1000 / 540)} panels
                </span>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800 col-span-2 md:col-span-1">
                <span className="block text-[10px] text-slate-500 font-mono uppercase">Carbon Offset</span>
                <span className="text-lg font-display font-bold text-emerald-400 mt-1 block flex items-center gap-1 justify-center md:justify-start">
                  <Leaf className="w-3.5 h-3.5" /> {carbonOffsetTons} t/yr
                </span>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-2.5 pt-2 border-t border-slate-800/50">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Estimated Project Cost:</span>
                <span className="font-mono text-slate-200">₹ {totalCost.toLocaleString("en-IN")}</span>
              </div>
              
              {propertyType === "residential" ? (
                <div className="flex justify-between text-xs">
                  <span className="text-amber-400 font-medium">Govt Subsidy (Surya Ghar Amount):</span>
                  <span className="font-mono text-amber-400">- ₹ {subsidy.toLocaleString("en-IN")}</span>
                </div>
              ) : (
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Tax depreciation benefit estimation:</span>
                  <span className="font-mono text-slate-300">~ 40% annually</span>
                </div>
              )}

              <div className="flex justify-between text-sm font-semibold pt-1.5 border-t border-dashed border-slate-800">
                <span className="text-white">Net Initial Investment:</span>
                <span className="font-mono text-white text-base">₹ {netCost.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between text-xs pt-1">
                <span className="text-emerald-400">Estimated Annual Saved Bill:</span>
                <span className="font-mono text-emerald-400">₹ {estimatedAnnualSavings.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-slate-400">System Amortization (Ample Payback):</span>
                <span className="font-semibold text-slate-200">{paybackPeriodYears} Years</span>
              </div>
            </div>

            {/* Success indicator */}
            <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-xl p-3 flex gap-2.5 items-center">
              <div className="h-6 w-6 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </div>
              <span className="text-[11px] text-slate-300 leading-normal">
                Transition to clean energy and reduce your carbon footprint under Indian Government initiatives seamlessly.
              </span>
            </div>
          </div>

          <div className="mt-4 pt-2">
            <button
              id="btn-solar-get-quote"
              onClick={handleInquiryMessage}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              Request Free Solar Site Assessment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
