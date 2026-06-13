export interface Service {
  id: string;
  title: string;
  category: "all" | "network" | "managed" | "telecom" | "iot" | "products" | "server" | "solar";
  shortDesc: string;
  fullDesc: string;
  bulletPoints: string[];
  ctaText: string;
}

export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  serviceCategory: string;
  message: string;
}
