import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    if (!this.state.mounted) {
      return null;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
              PetMatch
            </Link>
            <Link href="/adopt" passHref>
              <Button variant="outline" className="bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all">
                Find a Pet
              </Button>
            </Link>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12">
          <motion.section 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Find Your Perfect Companion
            </h1>
            <p className="text-xl text-gray-700 mb-8">Connecting loving homes with pets in need</p>
            <Link href="/adopt" passHref>
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Start Adopting
              </Button>
            </Link>
          </motion.section>

          <motion.section 
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-purple-600">Why Adopt?</h2>
              <ul className="space-y-4">
                {[
                  "Give a pet a second chance at happiness",
                  "Find a loyal companion for life",
                  "Save a life and make a difference",
                  "Experience unconditional love and joy"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="mr-3 text-green-500 text-xl">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Happy adopted pet with owner"
                fill
                className="object-cover"
              />
            </div>
          </motion.section>

          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-10 text-center text-purple-600">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Browse", description: "Explore our wide selection of pets looking for a home", icon: "🔍" },
                { title: "Meet", description: "Schedule a visit to meet your potential new family member", icon: "🤝" },
                { title: "Adopt", description: "Complete the adoption process and welcome your pet home", icon: "🏠" }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-purple-600">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className="text-center bg-white/50 backdrop-blur-sm p-10 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-purple-600">Ready to Meet Your New Best Friend?</h2>
            <p className="text-xl text-gray-700 mb-8">Start your journey to pet parenthood today!</p>
            <Link href="/adopt" passHref>
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                View Available Pets
              </Button>
            </Link>
          </motion.section>
        </main>

        <footer className="bg-white/30 backdrop-blur-sm mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 md:mb-0">&copy; 2023 PetMatch. All rights reserved.</p>
              <nav className="flex space-x-6">
                <Link href="/about" className="text-purple-600 hover:text-purple-700 transition-colors">About</Link>
                <Link href="/contact" className="text-purple-600 hover:text-purple-700 transition-colors">Contact</Link>
                <Link href="/privacy" className="text-purple-600 hover:text-purple-700 transition-colors">Privacy Policy</Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;