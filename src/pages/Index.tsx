
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart3, Map, Bell, Users, CheckCircle, Shield, Recycle, Activity, Camera, LineChart } from 'lucide-react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  const stats = [
    { value: '40%', label: 'Waste Reduction' },
    { value: '30%', label: 'Cost Savings' },
    { value: '75%', label: 'Collection Efficiency' },
    { value: '25K+', label: 'Active Users' }
  ];

  const features = [
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Track waste bin levels with color-coded indicators (Green, Yellow, Red) and receive instant alerts for efficient management.'
    },
    {
      icon: LineChart,
      title: 'AI-Powered Analytics',
      description: 'Analyze waste patterns and predict collection needs with intelligent algorithms and comprehensive analytics.'
    },
    {
      icon: Map,
      title: 'Smart Route Optimization',
      description: 'Optimize collection routes automatically based on bin fill levels, location, and traffic conditions.'
    },
    {
      icon: Camera,
      title: 'Visual Monitoring',
      description: 'Use camera-based monitoring with AI for waste identification and classification to enhance recycling rates.'
    }
  ];

  const benefits = [
    'Reduce collection costs by up to 30% with AI-optimized routes',
    'Decrease carbon emissions with smart scheduling and less frequent collections',
    'Prevent overflow incidents with predictive analysis and early warnings',
    'Improve recycling rates with proper waste classification',
    'Generate renewable energy from organic waste collection',
    'Enhance urban cleanliness and public health standards'
  ];

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section with Tagline */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="md:max-w-2xl">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="block">Transforming Waste into</span>
                  <span className="text-gradient">Opportunity</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 mb-8 md:pr-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  GreenTech revolutionizes waste management with smart technology, real-time monitoring, and AI-driven optimization for a cleaner, more sustainable future.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/contact" className="btn-primary">
                    Get Started Today
                  </Link>
                  <Link to="/features" className="px-6 py-3 text-gray-700 border border-gray-300 rounded-md hover:border-eco-green hover:text-eco-green transition-all duration-300 flex items-center justify-center">
                    Learn More
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-12 md:mt-0 md:ml-8 lg:ml-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="relative mx-auto max-w-md">
                  <div className="absolute -inset-1 bg-gradient-to-br from-eco-green/30 to-eco-blue/30 rounded-2xl blur-2xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Smart Waste Management" 
                    className="relative rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="glass-card py-8 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Preview Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Smart Features for <span className="text-gradient">Efficient Waste Management</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our platform integrates cutting-edge technology to streamline waste collection, promote recycling, and create sustainable communities.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/features" 
                className="inline-flex items-center space-x-2 text-eco-green font-medium hover:text-eco-blue transition-colors"
              >
                <span>Explore all features</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-br from-eco-dark to-eco-dark/95 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Benefits of Smart Waste Management
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our comprehensive solution delivers significant environmental, economic, and social benefits for communities, businesses, and municipalities.
                </motion.p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="text-eco-green mt-1 flex-shrink-0" size={22} />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link to="/about" className="btn-primary">
                    Learn More About Us
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative mx-auto max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-eco-green/30 to-eco-blue/30 rounded-xl blur-2xl"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                      alt="Smart waste management benefits" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative glass-card p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-eco-green/10 to-eco-blue/10"></div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-eco-green/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-eco-blue/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">Join the Smart Waste Revolution</h2>
                  <p className="text-lg text-gray-600">
                    Be part of the growing community of municipalities, businesses, and organizations adopting smart waste management for a cleaner, greener future.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary whitespace-nowrap">
                    Get Started Today
                  </Link>
                  <Link to="/features" className="px-6 py-3 font-medium text-eco-dark border border-gray-300 rounded-md hover:border-eco-green hover:text-eco-green transition-all duration-300 flex items-center justify-center whitespace-nowrap">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Index;
