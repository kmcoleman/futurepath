export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin: string;
  github: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Kevin Coleman",
    title: "Founder",
    bio: "Kevin is a technology leader and entrepreneur with a passion for building innovative solutions. He believes the best way to master AI isn't through courses—it's by building real products that solve real problems. With decades of experience in software development and a focus on mobile and web applications, Kevin founded FuturePath Development to bring ideas to life through modern technology stacks and AI-assisted development.",
    image: "/kmc.jpg",
    linkedin: "https://www.linkedin.com/in/kevin-coleman-34a57a10",
    github: "https://github.com/kmcoleman",
  },
  {
    name: "Brad Coleman",
    title: "Co-Founder",
    bio: "Brad brings expertise in AI-driven development and innovation strategy. He believes in using AI as a catalyst for continuous learning and skill enhancement, empowering individuals and businesses to build upon small innovations and pursue entrepreneurial opportunities.",
    image: "/blc.png",
    linkedin: "https://www.linkedin.com/in/brad-coleman-109529",
    github: "https://github.com/bradcoleman60",
  },
];
