import { Service } from "./types";

export const servicesData: Service[] = [
  {
    id: "network",
    title: "Comprehensive Network Services",
    category: "network",
    shortDesc: "A secure, resilient, and blazing-fast network architecture built for modern business demands.",
    fullDesc: "A secure and reliable network forms the backbone of every modern business, and Netmusk Network Services are designed to meet these evolving demands. We design, deploy, and audit complex enterprise topologies with a focus on cyber defense, uptime, and flexible high-capacity access.",
    bulletPoints: [
      "Network Architecture Planning & LAN/WAN Topology Design",
      "Enterprise Wireless Network Design & Scalability Planning",
      "Proactive Network Assessment & Continuous Auditing",
      "Advanced Firewall Deployment & Zero-Trust Infrastructure",
      "Intrusion Detection & Prevention Systems (IDS/IPS)",
      "Network Access Control (NAC) & Endpoint Security Safeguards",
      "Network Management Systems (NMS) with 24/7 Monitoring"
    ],
    ctaText: "Request Network Audit"
  },
  {
    id: "managed",
    title: "Proactive Managed IT Services",
    category: "managed",
    shortDesc: "Outsource your IT operations to expert engineers. Round-the-clock helpdesk, maintenance, and support.",
    fullDesc: "Managing IT in-house can be costly and time-consuming. Our Managed IT Services take that burden off your shoulders, enabling you to focus on growth. We go beyond troubleshooting with preventive monitoring and aligned technologies that power your competitive edge.",
    bulletPoints: [
      "24/7/365 Professional Helpdesk & Ticket Escalation Support",
      "Reliable Remote IT Support & Quick-Response On-Site Engineers",
      "Proactive Maintenance & Patch Management to prevent downtime",
      "Strategic IT Consulting & Forward-Looking Technology Roadmapping",
      "Managed Security Services safeguarding files, networks, & devices",
      "Full IT Assets Management & Performance Auditing"
    ],
    ctaText: "Explore Managed IT Plans"
  },
  {
    id: "iot",
    title: "Smarter Living & IoT Automation",
    category: "iot",
    shortDesc: "Harness the power of intelligent systems, automated properties, and Industrial IoT structures.",
    fullDesc: "The Internet of Things (IoT) is transforming the way we live and work, bringing intelligence and automated convenience into everyday spaces. We construct integrated smart living layouts and high-performance industrial telemetry systems.",
    bulletPoints: [
      "Smart Appliances, Connected Lighting, Plugs, & Thermostats",
      "Integrated Home Security, smart locks, & real-time surveillance",
      "Industrial IoT (IIoT) for manufacturing, logistics, & infrastructure",
      "Predictive Equipment Maintenance & real-time telemetry analysis",
      "Bespoke mobile controllers & smart dashboards for monitoring",
      "Energy conservation algorithms & green automation solutions"
    ],
    ctaText: "Design IoT Solution"
  },
  {
    id: "telecom",
    title: "Modern Telecommunication Systems",
    category: "telecom",
    shortDesc: "Unify voice, video, and communication pathways on a single highly-available platform.",
    fullDesc: "In today’s fast-paced business world, effective communication is the key to productivity and growth. Modern telecommunication solutions are bridging gaps, enabling seamless collaboration across teams, offices, and continents.",
    bulletPoints: [
      "Advanced VoIP Enterprise Phone Systems replacing old copper lines",
      "Flexible PBX Systems for efficient multi-line calling and holding",
      "Unified Communication Systems integrating voice, video, and chat",
      "HD video conferencing and collaboration workspace bridges",
      "Affordable, highly scalable communication options for startups",
      "Multi-device cloud softphone app integrations"
    ],
    ctaText: "Upgrade Telecom Setup"
  },
  {
    id: "products",
    title: "Comprehensive IT Products Portfolio",
    category: "products",
    shortDesc: "Premium hardware, specialized peripherals, software assets, and enterprise security platforms.",
    fullDesc: "Having the right IT products is essential for smooth operations and long term growth. We supply end-to-end IT components, enterprise software, and active hardware configurations from top-tier global vendors.",
    bulletPoints: [
      "High-Performance Computing Devices: Pro Desktops & Notebook Laptops",
      "Secure Physical Workplace: CCTV cameras and RFID Access Control systems",
      "Aesthetic Commercial Displays & high-resolution digital signs",
      "Operating Systems, Productivity Suites, & business utility licenses",
      "Robust cybersecurity, antivirus, and database software assets",
      "End-to-end active networking accessories, cables, and racks"
    ],
    ctaText: "Source IT Products"
  },
  {
    id: "server",
    title: "Reliable Server & Storage Solutions",
    category: "server",
    shortDesc: "High-density servers and storage layouts that protect your database records with secure backups.",
    fullDesc: "Every modern business relies on data and performance, starting with the right server architectures. We design secure storage environments supporting rapid file sharing, reliable disaster recovery, and lightning-fast local databases.",
    bulletPoints: [
      "High-Performance Server Deployments: Rack, Blade, & Tower configurations",
      "Network Attached Storage (NAS) configurations for high-speed local groups",
      "Secure Private Cloud Storage setups with remote global accessibility",
      "Automated Database Redundant Backup schemes avoiding data loss",
      "Virtualization architectures (Hyper-V/VMware) for resource optimization",
      "Disaster Recovery plans with sub-hour recovery times"
    ],
    ctaText: "Optimize Server Specs"
  },
  {
    id: "solar",
    title: "Sustainable Solar Energy Infrastructure",
    category: "solar",
    shortDesc: "Harness the sun to reduce electricity overhead. Solar solutions under direct PM Surya Ghar subsidy schemes.",
    fullDesc: "As the world moves toward cleaner energy, solar installations have become a smart investment. We assist both residential and business properties to transition onto renewable grid setups with high-efficiency PV arrays.",
    bulletPoints: [
      "Full Solar System Consultation, Engineering, and Panel Installation",
      "Tailored panels tailored for residential households & corporate yards",
      "PM Surya Ghar Muft Bijli Yojana integration & subsidy navigation",
      "Grid-interactive net metering setups giving credits for surplus power",
      "High-durability solar inverters, PV modules, and structural rigs",
      "Proactive solar panel wash, power optimization, and health maintenance"
    ],
    ctaText: "Assess Solar Savings"
  }
];

export const contactDetails = {
  address: "3/298 Viram Khand, Gomti Nagar, Lucknow - 226010",
  email: "sales@netmusk.com",
  phones: [
    { label: "Sales & Inquiry", value: "+91 7985352092", url: "https://wa.me/917985352092" },
    { label: "Technical Support", value: "+91 9794290744", url: "https://wa.me/919794290744" }
  ],
  hours: [
    { days: "Monday - Saturday", time: "09:00 AM – 05:00 PM" },
    { days: "Sunday", time: "Closed" }
  ],
  whatsappLink: "https://wa.me/917985352092?text=Hello%20Netmusk!%20I%20am%20interested%20in%20your%20IT%20solutions%20and%20would%20like%20to%20get%20more%20details."
};

export const reviews = [
  {
    name: "Rajesh Kumar",
    company: "Apex Retail Solutions",
    text: "Netmusk completely redesigned our warehouse LAN network. The connection is stable, fast, and the security systems they set up give us complete peace of mind. Exceptional execution!"
  },
  {
    name: "Shweta Rastogi",
    company: "SmartLife Realty",
    text: "We wanted local smart home features integrated. The IoT systems Netmusk wired up are incredibly convenient. The support was highly professional and on schedule."
  },
  {
    name: "Amit Dwivedi",
    company: "Dwivedi & Sons Co.",
    text: "Installed solar panels with Netmusk under the PM Surya Ghar scheme. Our electricity bills dropped significantly and they handled all structural approvals smoothly. Very recommended!"
  }
];

export const stats = [
  { value: "48h", label: "Email Backup Time" },
  { value: "100%", label: "Uptime Promised" },
  { value: "99.9%", label: "Customer Satisfaction" },
  { value: "150+", label: "Completed Projects" }
];
