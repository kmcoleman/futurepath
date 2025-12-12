import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembers } from "@/lib/data/team";

export const metadata = {
  title: "About Us | FuturePath Development",
  description: "Meet the team behind FuturePath Development. We build innovative mobile and web applications.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We&apos;re a team of builders who believe in learning by doing, shipping fast, and creating real value.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Philosophy</h2>
              <p className="text-lg text-slate-600">
                At FuturePath Development, we believe the best way to master technology isn&apos;t through theory—it&apos;s
                by building real products that solve real problems. We embrace AI-assisted development, rapid
                iteration, and a hands-on approach to creating innovative solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Ship Fast</h3>
                <p className="text-sm text-slate-600">
                  We believe in rapid iteration and getting products in front of users quickly.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Solve Real Problems</h3>
                <p className="text-sm text-slate-600">
                  Every project starts with a real need and delivers tangible value.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Embrace AI</h3>
                <p className="text-sm text-slate-600">
                  We leverage AI tools to build better products faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Team</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The people behind FuturePath Development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden mx-auto sm:mx-0">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                        <p className="text-sm text-slate-600 mb-4">{member.bio}</p>
                        <div className="flex gap-3 justify-center sm:justify-start">
                          <Link
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                          </Link>
                          <Link
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-900 transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
