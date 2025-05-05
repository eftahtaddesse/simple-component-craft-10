
import React from "react";
import { Shield, Code, Zap, Users } from "lucide-react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui-custom/Card";
import Button from "../components/ui-custom/Button";
import Input from "../components/ui-custom/Input";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Beautiful Components for Your React Projects"
        subtitle="A collection of reusable, customizable UI components built with React and Tailwind CSS to speed up your development process."
        ctaText="Explore Components"
        secondaryCtaText="Learn More"
      />
      
      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our components are designed with flexibility and ease of use in mind,
            allowing you to create beautiful interfaces quickly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Customizable"
            description="Easily customize components to match your brand and design requirements."
            icon={<Code size={24} />}
          />
          <FeatureCard
            title="Responsive"
            description="Components are designed to work flawlessly on all devices and screen sizes."
            icon={<Zap size={24} />}
          />
          <FeatureCard
            title="Accessible"
            description="Built with accessibility in mind to ensure your application is usable by everyone."
            icon={<Users size={24} />}
          />
          <FeatureCard
            title="Secure"
            description="Developed with best practices to help you build secure web applications."
            icon={<Shield size={24} />}
          />
        </div>
      </section>
      
      {/* Component Examples Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Component Examples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some examples of the components you can use in your projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card Examples */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Cards</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is a simple card component that you can use to display information.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Button Examples */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Buttons</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
            
            {/* Form Example */}
            <div className="md:col-span-2">
              <h3 className="font-semibold text-lg mb-4">Form Inputs</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="First Name" placeholder="John" required />
                    <Input label="Last Name" placeholder="Doe" required />
                    <Input
                      className="md:col-span-2"
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                    <Input
                      className="md:col-span-2"
                      label="Message"
                      placeholder="Your message here..."
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to build amazing interfaces?</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Get started with our component library today and speed up your development workflow.
          </p>
          <Button
            className="bg-white text-blue-600 hover:bg-gray-100"
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Components</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Buttons</a></li>
                <li><a href="#" className="hover:text-white">Cards</a></li>
                <li><a href="#" className="hover:text-white">Forms</a></li>
                <li><a href="#" className="hover:text-white">Navigation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Examples</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">License</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p>© 2025 ComponentCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
