export interface Project {
  name: string;
  description: string;
  technologies: string[];
  status: "In Development" | "Active" | "Beta" | "Planning";
  link?: string;
  members: string[];
  screenshots?: string[];
}

export const projects: Project[] = [
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
      "ShredShare enables organizers of winter ski leases to create a house and manage their members with a shared group calendar. Built in React Native leveraging Expo, the app supports login with Apple and Google, has push notifications for reservation updates, and reports on local weather and weather alerts, travel time to the ski house, and road conditions using APIs and web scraping. The app is in the App Store now, though not yet publicly released while we tighten up the backend. Right now it's a single user app, but the multi-user version will be released soon. Future ideas for this platform include a connections feature where people looking for ski leases or other members can connect and evaluate if it's a fit, managing expenses, and more.",
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
    status: "In Development",
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
];
