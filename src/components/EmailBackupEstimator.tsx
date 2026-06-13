import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, HardDrive, Cloud, AlertCircle, CheckCircle2, 
  RefreshCw, Play, ArrowRight, ShieldCheck, HelpCircle 
} from "lucide-react";

interface EmailBackupEstimatorProps {
  onBackUpSupportClick: (customMessage: string) => void;
}

export default function EmailBackupEstimator({ onBackUpSupportClick }: EmailBackupEstimatorProps) {
  const [provider, setProvider] = useState<"workspace" | "office365" | "imap">("workspace");
  const [usersCount, setUsersCount] = useState<number>(15);
  const [avgSize, setAvgSize] = useState<number>(25); // in GB
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [simStep, setSimStep] = useState(0);
  const [simLogs, setSimLogs] = useState<string[]>([]);

  const totalBackupSizeGb = usersCount * avgSize;
  const totalBackupSizeTb = (totalBackupSizeGb / 1024).toFixed(2);

  // Recommendations calculated dynamically
  const recommendedStorage = totalBackupSizeGb > 500 ? "Dedicated Network Attached Storage (NAS) + Secured Cloud Mirroring" : "Symmetric Cloud Vaulting (Encrypted S3/Azure Blob)";
  const estimationCostEstimate = (usersCount * 1.5).toFixed(0); // dynamic estimated operational savings comparison in $ equivalent or Indian INR
  const estimatedHours = (totalBackupSizeGb / 45).toFixed(1); // assuming 45 GB/hour on standard business gigabit fiber

  const logs = [
    "Establishing secure gateway authentication protocols...",
    `Discovered ${usersCount} discrete active user mailboxes via ${provider === "workspace" ? "Google G-Suite API" : provider === "office365" ? "Microsoft Graph Server" : "IMAP/SSL Handshake"}...`,
    "Mapping folder directories (Inbox, Sent, Archives, Custom Labels)...",
    "Allocating high-density secure buffer structures...",
    "Hashing headers and computing secure AES-256 local keys...",
    `Compiling system metadata for backup catalog (${totalBackupSizeGb} GB total estimation)...`,
    "Creating transaction logs & incremental safety snapshots...",
    "Finalizing integrity checks & compressing storage archives...",
    "Backup image locked! Security verification completes successfully."
  ];

  useEffect(() => {
    let interval: any;
    if (isSimulating) {
      interval = setInterval(() => {
        setSimulationProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsSimulating(false);
            }, 600);
            return 100;
          }
          const nextVal = prev + Math.floor(Math.random() * 8) + 3;
          const clamped = Math.min(nextVal, 100);

          // Update logs relative to progress
          const currentStep = Math.floor((clamped / 100) * logs.length);
          if (currentStep !== simStep && currentStep < logs.length) {
            setSimStep(currentStep);
            setSimLogs((prevLogs) => [...prevLogs, logs[currentStep]]);
          }

          return clamped;
        });
      }, 150);
    } else {
      setSimulationProgress(0);
      setSimStep(0);
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleStartSim = () => {
    setSimLogs([logs[0]]);
    setSimulationProgress(0);
    setSimStep(0);
    setIsSimulating(true);
  };

  const handleBackupRequestMessage = () => {
    const customMsg = `Hello Netmusk! I want to configure a reliable Email Backup solution for my team. We have about ${usersCount} mailboxes with an estimated average size of ${avgSize} GB using ${provider === 'workspace' ? 'Google Workspace' : provider === 'office365' ? 'Microsoft O365' : 'Custom IMAP/Exchange'}. Please share a quote and backup strategies.`;
    onBackUpSupportClick(customMsg);
  };

  return (
    <div id="email-backup-panel" className="bg-[#0f172a] border border-cyan-500/20 rounded-3xl overflow-hidden p-6 lg:p-8 shadow-2xl relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full inline-block mb-3">
            Interactive Enterprise Utility
          </span>
          <h3 className="text-2xl font-display font-semibold text-white flex items-center gap-2">
            <Mail className="text-cyan-400 w-6 h-6" /> Email Backup & Protection Vault
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            "Easily back up all your emails. Get support if needed. Back It Up."
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-emerald-400">Security Sandbox Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Interactive Side */}
        <div className="lg:col-span-7 space-y-6">
          {/* Provider Toggle */}
          <div>
            <label className="block text-xs font-mono text-cyan-300 uppercase tracking-widest mb-3">
              1. Choose Primary System Host
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "workspace", label: "Google Workspace" },
                { id: "office365", label: "Office 365" },
                { id: "imap", label: "IMAP/Exchange" }
              ].map((prov) => (
                <button
                  key={prov.id}
                  id={`prov-btn-${prov.id}`}
                  onClick={() => setProvider(prov.id as any)}
                  className={`py-3 px-2 rounded-xl border text-xs font-medium transition-all flex flex-col items-center gap-1 ${
                    provider === prov.id
                      ? "bg-cyan-950/50 border-cyan-400 text-white shadow-lg shadow-cyan-950"
                      : "bg-[#0b0f19] border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="font-semibold text-center">{prov.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* User Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
                2. Number of Active User Mailboxes
              </label>
              <span className="px-2.5 py-0.5 bg-slate-900 border border-slate-700 text-cyan-400 rounded-md font-mono text-sm font-semibold">
                {usersCount} Users
              </span>
            </div>
            <input
              id="users-slider"
              type="range"
              min="1"
              max="500"
              value={usersCount}
              onChange={(e) => setUsersCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>1 Mailbox</span>
              <span>150 Mailboxes</span>
              <span>300 Mailboxes</span>
              <span>500+ Mailboxes</span>
            </div>
          </div>

          {/* Size Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
                3. Estimated Average Mailbox Size
              </label>
              <span className="px-2.5 py-0.5 bg-slate-900 border border-slate-700 text-cyan-400 rounded-md font-mono text-sm font-semibold">
                {avgSize} GB / User
              </span>
            </div>
            <input
              id="size-slider"
              type="range"
              min="2"
              max="150"
              value={avgSize}
              onChange={(e) => setAvgSize(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>2 GB</span>
              <span>50 GB</span>
              <span>100 GB</span>
              <span>150 GB</span>
            </div>
          </div>

          {/* Interactive Start Simulation Button */}
          <div className="pt-2">
            {!isSimulating ? (
              <button
                id="btn-simulate-backup"
                onClick={handleStartSim}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold rounded-xl text-sm transition-all duration-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" /> Initialize Simulated Backup Check
              </button>
            ) : (
              <div className="bg-slate-950/70 border border-cyan-500/40 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 animate-pulse">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Live Syncing Simulation...
                  </span>
                  <span className="text-sm font-mono font-bold text-white">{simulationProgress}%</span>
                </div>
                {/* Progress Bar container */}
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-[length:600px_100%] animate-pulse rounded-full transition-all duration-150"
                    style={{ width: `${simulationProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Output Side */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-5 space-y-5 flex-grow">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">
              System Cost & Storage Diagnostics
            </h4>

            {/* Total Backup metric */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/80 text-center">
                <span className="block text-[11px] text-slate-500 font-mono uppercase">Backup Volume</span>
                <span className="text-xl font-display font-bold text-white mt-1 block">
                  {totalBackupSizeGb >= 1024 ? `${totalBackupSizeTb} TB` : `${totalBackupSizeGb} GB`}
                </span>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/80 text-center">
                <span className="block text-[11px] text-slate-500 font-mono uppercase">Sync Fiber Time</span>
                <span className="text-xl font-display font-bold text-cyan-400 mt-1 block">
                  ~ {estimatedHours} hrs
                </span>
              </div>
            </div>

            {/* Dynamic Diagnostics */}
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-slate-200 block">Recommended Architecture:</span>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    {recommendedStorage}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <HardDrive className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-slate-200 block">Redundancy Principle:</span>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    3-2-1 Strategy (3 copies of emails, 2 different storage media types, 1 offsite/cloud copy).
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Live Terminal Logs */}
            <div className="bg-slate-950 p-3 rounded-xl border border-cyan-950 h-36 overflow-y-auto font-mono text-[10px] text-slate-400 scrollbar-thin">
              <div className="text-cyan-400 text-[9px] border-b border-cyan-950 pb-1 mb-2 flex justify-between">
                <span>TERMINAL SNAPSHOT LOGS</span>
                <span>UTC RECORD</span>
              </div>
              {simLogs.length === 0 ? (
                <div className="text-slate-600 italic flex items-center justify-center h-24">
                  Initialize simulated backup above to inspect log cycles...
                </div>
              ) : (
                <div className="space-y-1.5">
                  {simLogs.map((log, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-emerald-400">
                      <span className="text-cyan-600 shrink-0 select-none">[ok]</span>
                      <span className="text-slate-300 leading-normal">{log}</span>
                    </div>
                  ))}
                  {isSimulating && (
                    <div className="flex gap-2 items-center text-cyan-400">
                      <span className="text-cyan-500 animate-spin shrink-0">⟳</span>
                      <span className="animate-pulse">Fetching stream logs ...</span>
                    </div>
                  )}
                  {!isSimulating && simLogs.length === logs.length && (
                    <div className="text-green-400 font-bold mt-2 pt-1 border-t border-cyan-950/50 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400 inline" /> Simulation Cycle Successful! Secure copy verified.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-2">
            <button
              id="btn-backup-get-support"
              onClick={handleBackupRequestMessage}
              className="w-full py-3 bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              Get Real Backup Setup Support <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
