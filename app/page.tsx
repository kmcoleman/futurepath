import Link from "next/link";
import { ArrowRight, Smartphone, Globe, Cpu, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS and Android apps built with React Native and Expo for seamless cross-platform experiences.",
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern web apps using Next.js, React, and cloud infrastructure for scalable solutions.",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Leveraging AI and agentic development to build smarter, more efficient applications.",
    },
    {
      icon: Rocket,
      title: "Rapid Development",
      description: "Fast iteration cycles and agile methodologies to bring your ideas to life quickly.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Building the Future,
                <span className="text-blue-400"> One App at a Time</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                FuturePath Development creates innovative mobile and web applications
                that solve real problems using modern technology and AI-assisted development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/portfolio">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What We Do
              </h2>
              <p className="text-lg text-slate-600">
                We specialize in building custom software solutions that help businesses
                and communities connect, organize, and thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="border-2 hover:border-blue-500 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Check out our portfolio to see what we&apos;ve built, or learn more about our team and approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/portfolio">See Our Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
