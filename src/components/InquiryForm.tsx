import React, { useState, useEffect } from "react";
import { MessageSquare, Mail, Send, CheckCircle, Smartphone, MapPin, Clock, ArrowRight } from "lucide-react";
import { InquiryData } from "../types";
import { contactDetails } from "../data";

interface InquiryFormProps {
  initialMessage?: string;
  onFormSubmitSuccess?: () => void;
}

export default function InquiryForm({ initialMessage, onFormSubmitSuccess }: InquiryFormProps) {
  const [formData, setFormData] = useState<InquiryData>({
    name: "",
    email: "",
    phone: "",
    serviceCategory: "General Inquiry",
    message: ""
  });
  const [hasSent, setHasSent] = useState(false);
  const [errors, setErrors] = useState<Partial<InquiryData>>({});

  useEffect(() => {
    if (initialMessage) {
      // Parse query if anything custom is passed
      let category = "General Inquiry";
      if (initialMessage.includes("Email Backup")) {
        category = "Server & Backup Support";
      } else if (initialMessage.includes("Solar")) {
        category = "Solar Panel Consulting";
      } else if (initialMessage.includes("Network")) {
        category = "Network Architecture";
      }
      setFormData((prev) => ({
        ...prev,
        message: initialMessage,
        serviceCategory: category
      }));
    }
  }, [initialMessage]);

  const validateForm = () => {
    const tempErrors: Partial<InquiryData> = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Valid Work Email is required";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone Coordinate is required";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 8) {
      tempErrors.phone = "Provide a valid contact number";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formattedText = encodeURIComponent(
      `Netmusk Inquiry Form Live \n` +
      `-------------------------\n` +
      `👤 Client Name: ${formData.name}\n` +
      `✉️ Work Email: ${formData.email}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `⚙️ Business Category: ${formData.serviceCategory}\n` +
      `📝 Inquiry Message: ${formData.message}`
    );

    window.open(`https://wa.me/917985352092?text=${formattedText}`, "_blank");
    setHasSent(true);
    if (onFormSubmitSuccess) onFormSubmitSuccess();
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Netmusk Business Inquiry - ${formData.serviceCategory}`);
    const body = encodeURIComponent(
      `Hello Netmusk Team,\n\n` +
      `I am reaching out regarding your professional IT system integrator solutions.\n\n` +
      `Here are my business requirements:\n` +
      `- Name: ${formData.name}\n` +
      `- Contact Phone: ${formData.phone}\n` +
      `- Work Email: ${formData.email}\n` +
      `- Service Classification: ${formData.serviceCategory}\n` +
      `- Requirements Details:\n${formData.message}\n\n` +
      `Please contact me at your earliest convenience.\n\n` +
      `Best regards,\n` +
      `${formData.name}`
    );

    window.open(`mailto:sales@netmusk.com?subject=${subject}&body=${body}`, "_blank");
    setHasSent(true);
    if (onFormSubmitSuccess) onFormSubmitSuccess();
  };

  return (
    <div id="inquiry-form-card" className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      {/* Left Contact Coordinate Pane */}
      <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
        <div>
          <span className="text-xs font-mono px-3 py-1 bg-slate-950 text-cyan-400 border border-slate-800 rounded-full inline-block mb-3">
            Available 24/7 Response Desk
          </span>
          <h3 className="text-2xl font-display font-semibold text-white">
            Connect with Netmusk Sales Desk
          </h3>
          <p className="text-slate-400 text-xs mt-2 leading-relaxed">
            Reach out via our prompt digital portals. Better yet, visit our development headquarters for system architectural boards.
          </p>
        </div>

        {/* Real Address Coordinates */}
        <div className="space-y-4 my-2">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#0b0f19] border border-slate-850 rounded-xl">
              <MapPin className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">HQs Workspace Address</span>
              <p className="text-xs font-medium text-slate-200 leading-normal mt-0.5">
                {contactDetails.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-[#0b0f19] border border-slate-850 rounded-xl">
              <Mail className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Direct Sales Mailing</span>
              <a href={`mailto:${contactDetails.email}`} className="text-xs font-medium text-cyan-400 hover:underline block mt-0.5">
                {contactDetails.email}
              </a>
            </div>
          </div>

          {contactDetails.phones.map((phone, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="p-2.5 bg-[#0b0f19] border border-slate-850 rounded-xl">
                <Smartphone className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">{phone.label}</span>
                <a href={phone.url} target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-200 hover:text-cyan-400 block mt-0.5 font-mono">
                  {phone.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Operation Hours */}
        <div className="bg-[#0b0f19] border border-slate-850 p-4 rounded-2xl flex items-start gap-3">
          <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <div className="text-[11px]">
            <span className="font-semibold text-slate-200 block mb-1">Standard Work Hours</span>
            {contactDetails.hours.map((h, i) => (
              <div key={i} className="flex justify-between text-slate-400 gap-4 mt-0.5">
                <span>{h.days}:</span>
                <span className="font-mono text-slate-350">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Inquiry Fields Forms */}
      <div className="lg:col-span-7">
        {hasSent ? (
          <div className="bg-slate-950/60 border border-emerald-900/30 rounded-2xl p-8 text-center space-y-4 flex flex-col items-center justify-center h-full">
            <CheckCircle className="w-12 h-12 text-emerald-400 animate-bounce" />
            <h4 className="text-lg font-display font-bold text-white">
              Inquiry Draft Formulated Successfully!
            </h4>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed mx-auto">
              We have generated your structured data payload. If your chat prompt or mail app hasn't popped up, you can formulate another or chat on WhatsApp. Our engineers will follow up within 2 operational hours.
            </p>
            <button
              id="draft-another-btn"
              onClick={() => {
                setHasSent(false);
                setFormData((prev) => ({ ...prev, message: "" }));
              }}
              className="py-2.5 px-5 bg-cyan-950 border border-cyan-800 text-cyan-300 rounded-xl text-xs font-medium hover:bg-slate-900 transition-colors cursor-pointer"
            >
              Draft Another Inquire Request
            </button>
          </div>
        ) : (
          <form className="space-y-4">
            <h4 className="text-sm font-mono text-cyan-300 uppercase tracking-widest mb-2 pb-1 border-b border-slate-800">
              Personalized RFP & Information Request
            </h4>

            {/* Row Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1.5">* Full Human Name</label>
                <input
                  id="inq-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priyanshu Singh"
                  className={`w-full bg-slate-950/80 border text-xs text-slate-200 px-3 py-2.5 rounded-xl outline-none focus:border-cyan-400 transition-colors ${
                    errors.name ? "border-red-500/60" : "border-slate-800"
                  }`}
                />
                {errors.name && <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1.5">* Work Email Address</label>
                <input
                  id="inq-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. team@yourbusiness.com"
                  className={`w-full bg-slate-950/80 border text-xs text-slate-200 px-3 py-2.5 rounded-xl outline-none focus:border-cyan-400 transition-colors ${
                    errors.email ? "border-red-500/60" : "border-slate-800"
                  }`}
                />
                {errors.email && <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.email}</span>}
              </div>
            </div>

            {/* Row Phone & Category Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1.5">* Contact Phone Coordinate</label>
                <input
                  id="inq-phone"
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 79853 52092"
                  className={`w-full bg-slate-950/80 border text-xs text-slate-200 px-3 py-2.5 rounded-xl outline-none focus:border-cyan-400 transition-colors ${
                    errors.phone ? "border-red-500/60" : "border-slate-800"
                  }`}
                />
                {errors.phone && <span className="text-[10px] text-red-400 font-mono mt-1 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1.5">Business Category Topic</label>
                <select
                  id="inq-category"
                  value={formData.serviceCategory}
                  onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 text-xs text-slate-350 px-3 py-2.5 rounded-xl outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="General Inquiry">General IT Consultation</option>
                  <option value="Network Architecture">Network Assessment & Security Audits</option>
                  <option value="Managed IT Support">Managed Helpdesk Plans</option>
                  <option value="Server & Backup Support">Backup Protection & Server Deployment</option>
                  <option value="Solar Panel Consulting">Residential & Business Solar ROI</option>
                  <option value="Smart Automation Office">Smart Home & IoT Automation Desks</option>
                  <option value="Modern Telecommunication">Commercial VoIP & PBX Setup</option>
                </select>
              </div>
            </div>

            {/* Message Box */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1.5">Detailed Project Description</label>
              <textarea
                id="inq-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                placeholder="What objectives can we help you solve? Tell us team size, key network issues, or solar requirements..."
                className="w-full bg-slate-950/85 border border-slate-800 text-xs text-slate-200 p-3 rounded-xl outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            {/* Two Gorgeous Form Submission Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <button
                id="btn-whatsapp-submit"
                onClick={handleWhatsappSubmit}
                className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/10"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Submit to WhatsApp Desk</span>
              </button>

              <button
                id="btn-email-submit"
                onClick={handleEmailSubmit}
                className="w-full py-3 px-4 bg-slate-950 hover:bg-slate-850 text-cyan-400 hover:text-cyan-300 border border-cyan-500/25 font-bold rounded-xl text-xs uppercase tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Transmit Official Email</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
