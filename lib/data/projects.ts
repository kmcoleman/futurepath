export interface Project {
  name: string;
  description: string;
  technologies: string[];
  status: "In Development" | "Active" | "Beta" | "Planning";
  link?: string;
  members: string[];
  screenshots?: string[];
  screenshotType?: "mobile" | "desktop";
}

export const projects: Project[] = [
  {
    name: "GroupAlerts",
    description:
      "GroupAlerts is a SaaS platform that enables organizations like daycares, schools, and churches to send emergency SMS and email alerts to their communities. Administrators create groups, invite members who verify their phone numbers via SMS, and can instantly reach everyone when emergencies happen. The platform features tiered pricing plans, CSV/Excel member import, message templates, and delivery tracking. A companion mobile app is currently in development using React Native and Expo.",
    technologies: ["React", "Firebase", "Cloud Functions", "Twilio", "SendGrid", "React Native", "Expo"],
    status: "Beta",
    link: "https://groupalerts.app",
    members: ["Kevin Coleman"],
    screenshots: [
      "/groupalerts - homepage.jpeg",
      "/groupalerts - dash1.jpeg",
      "/groupalerts - dash2jpeg.jpeg",
      "/groupalerts - invite.jpeg",
      "/groupalerts - enroll.jpeg",
    ],
  },
  {
    name: "Beercounts",
    description:
      "Beercounts.com is a PWA built for a restaurant in Danville California, Pete's Brass Rail. They have a beer club that enables their customers to keep track of the beers they have drank. Most members record them on a manual sheet maintained at the restaurant. Beercounts puts this online in a functional App.",
    technologies: ["PWA", "Web App", "Database"],
    status: "Active",
    link: "https://beercounts.com",
    members: ["Brad Coleman"],
    screenshots: [
      "/beercounts-1.jpeg",
      "/beercounts-2.jpeg",
      "/beercounts-3.jpeg",
      "/beercounts-4.jpeg",
      "/beercounts-5.jpeg",
    ],
  },
  {
    name: "ShredShare",
    description:
      "ShredShare enables organizers of winter ski leases to create a house and manage their members with a shared group calendar. Built in React Native leveraging Expo, the app supports login with Apple and Google, has push notifications for reservation updates, and reports on local weather and weather alerts, travel time to the ski house, and road conditions using APIs and web scraping. Future ideas for this platform include a connections feature where people looking for ski leases or other members can connect and evaluate if it's a fit, managing expenses, and more.",
    technologies: ["React Native", "Expo", "Web App", "Calendar API", "Push Notifications", "Weather APIs"],
    status: "Active",
    link: "https://shredshare.app",
    members: ["Kevin Coleman"],
    screenshots: [
      "/shredshare-1.jpeg",
      "/shredshare-2.jpeg",
      "/shredshare-3.jpeg",
      "/shredshare-4.jpeg",
      "/shredshare-5.jpeg",
    ],
  },
  {
    name: "Motorcycle Club Event App",
    description:
      "A mobile app for the BMW Motorcycle Club of Northern California. Kevin Coleman, an avid adventure motorcyclist and current Tour Captain for the club, is developing this app to serve as an electronic program guide for the club's two annual rallies: the 49er and the Range of Light. The app is in development mode with user groups providing feedback on the design and features. It enables attendees to create custom schedules with notifications and share photos and posts with other attendees. Built in React Native using Expo with a full Firebase backend.",
    technologies: ["React Native", "Expo", "Firebase", "Push Notifications"],
    status: "Beta",
    members: ["Kevin Coleman"],
    screenshots: [
      "/rally-1.jpeg",
      "/rally-2.jpeg",
      "/rally-3.jpeg",
      "/rally-4.jpeg",
    ],
  },
  {
    name: "MyMotoWeb",
    description:
      "MyMotoWeb is a native iOS and Android app built in React Native that enables motorcycle owners to track their maintenance. We've built preconfigured maintenance lists for more than 75 BMW motorcycle models, with more being added regularly. The companion website at mymotoweb.com provides detailed maintenance schedules and documentation. We've also developed an agentic document processing agent that performs first-level assessment of maintenance documents submitted by users, helping riders organize and validate their service records. The app enables you to produce comprehensive maintenance reports for warranty service requests or when selling your bike.",
    technologies: ["React Native", "iOS", "Android", "Firebase", "AI/Agentic Processing"],
    status: "In Development",
    link: "https://mymotoweb.com",
    members: ["Kevin Coleman"],
    screenshots: [
      "/screenshot-garage.png",
      "/screenshot-dashboard.png",
      "/screenshot-maintenance.png",
      "/screenshot-schedule.png",
      "/screenshot-settings.png",
    ],
  },
  {
    name: "Wild Apricot eSignatures Integration",
    description:
      "A custom integration between the Wild Apricot membership management system and the eSignatures.com digital signature platform, enabling insurance waivers to be signed electronically. The solution receives webhooks when new events or event registrations are recorded in the membership system, then processes them and sends electronic signature requests to eSignatures.com for events meeting the criteria. A return webhook endpoint tracks waiver signature status, automatically downloads signed waivers, and stores them in a Google Cloud Storage bucket. An admin panel lets administrators verify that all event registrants have signed their waivers and resend signature requests if needed. This platform has significantly improved compliance with waiver requirements.",
    technologies: ["Webhooks", "Wild Apricot API", "eSignatures API", "Google Cloud Storage", "Cloud Functions"],
    status: "Active",
    members: ["Kevin Coleman"],
    screenshots: [
      "/ESIG-LIST.png",
      "/ESIG-CONFIG.png",
      "/ESIG-SUMMARY.png",
    ],
    screenshotType: "desktop",
  },
  {
    name: "Baja Moto Tour 2026",
    description:
      "A comprehensive event management platform for organizing a BMW Motorcycle Club adventure tour to Baja California. The web app handles participant registration with deposit tracking, pillion passenger management, room assignments, and itinerary planning. Features include an admin dashboard for managing registrations and sending bulk emails via SendGrid, Stripe payment integration, interactive maps with Leaflet/Mapbox, real-time in-app notifications, and a discussion forum. Built as a case study in agentic development, demonstrating how natural language prompts can be transformed into production-ready features.",
    technologies: ["React", "TypeScript", "Vite", "Firebase", "Firestore", "Cloud Functions", "SendGrid", "Stripe", "Leaflet", "Mapbox", "Expo"],
    status: "Active",
    link: "https://bajarun-2026.web.app",
    members: ["Kevin Coleman"],
  },
];
