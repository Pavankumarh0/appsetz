'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const services = [
  {
    title: "Startup & MVP",
    description: "Quickly validate your concept with a market-ready MVP that captures your core idea.",
    features: ["Rapid prototyping", "Core features only", "Market validation", "Budget-friendly"],
    detailedDescription: "Transform your innovative idea into a market-ready product with our specialized MVP development services. We focus on building the essential features that demonstrate your concept's value, allowing you to test the market quickly and cost-effectively.",
    detailedFeatures: [
      {
        title: "Rapid Prototyping",
        description: "Quick wireframes and interactive prototypes to visualize your idea before full development begins."
      },
      {
        title: "Core Features Only",
        description: "We focus on the essential functionality that defines your product's unique value proposition."
      },
      {
        title: "Market Validation",
        description: "Launch quickly to gather real user feedback and validate your business hypothesis."
      },
      {
        title: "Budget-Friendly",
        description: "Optimized development process that maximizes value while minimizing initial investment."
      },
      {
        title: "Scalable Architecture",
        description: "Built with growth in mind, making it easy to add features based on user feedback."
      },
      {
        title: "Fast Time-to-Market",
        description: "Typically delivered in 4-8 weeks, getting your product in users' hands quickly."
      }
    ],
    technologies: ["Flutter", "React Native", "Next.js", "Firebase", "PostgreSQL", "AWS"],
    timeline: "4-8 weeks",
    idealFor: "Entrepreneurs, startups, and businesses looking to test a new product idea with minimal risk."
  },
  {
    title: "Full-Cycle Development",
    description: "End-to-end app creation: design, development, testing, and store deployment.",
    features: ["Complete development", "UI/UX design", "Testing & QA", "App store deployment"],
    detailedDescription: "Experience comprehensive app development from conception to launch. Our full-cycle service covers every aspect of bringing your application to life, ensuring a polished, professional product ready for your users.",
    detailedFeatures: [
      {
        title: "Complete Development",
        description: "Full-stack development covering frontend, backend, databases, and API integrations."
      },
      {
        title: "UI/UX Design",
        description: "Professional design services creating intuitive, beautiful interfaces that users love."
      },
      {
        title: "Testing & QA",
        description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing."
      },
      {
        title: "App Store Deployment",
        description: "End-to-end deployment to Apple App Store and Google Play Store, handling all submission requirements."
      },
      {
        title: "Documentation",
        description: "Complete technical documentation and user guides for smooth handover and maintenance."
      },
      {
        title: "Post-Launch Support",
        description: "30-day post-launch support to address any issues and ensure smooth operation."
      }
    ],
    technologies: ["Flutter", "React Native", "Node.js", "MongoDB", "Redis", "Docker", "AWS/Azure"],
    timeline: "12-20 weeks",
    idealFor: "Businesses ready to launch a complete, market-ready application with professional quality and support."
  },
  {
    title: "Custom Solutions",
    description: "Bespoke applications tailored to your unique business challenges and goals.",
    features: ["Custom architecture", "Scalable solutions", "Enterprise features", "Ongoing support"],
    detailedDescription: "Get a solution perfectly tailored to your unique business needs. We design and build custom applications that address your specific challenges, integrate with your existing systems, and scale with your growth.",
    detailedFeatures: [
      {
        title: "Custom Architecture",
        description: "Bespoke system design optimized for your specific requirements and constraints."
      },
      {
        title: "Scalable Solutions",
        description: "Enterprise-grade architecture that handles growth from hundreds to millions of users."
      },
      {
        title: "Enterprise Features",
        description: "Advanced features like SSO, role-based access control, audit logs, and compliance tools."
      },
      {
        title: "System Integration",
        description: "Seamless integration with your existing tools, databases, and third-party services."
      },
      {
        title: "Ongoing Support",
        description: "Dedicated support team for maintenance, updates, and feature enhancements."
      },
      {
        title: "Performance Optimization",
        description: "Continuous monitoring and optimization to ensure peak performance at scale."
      }
    ],
    technologies: ["Flutter", "Custom Stack", "Microservices", "Kubernetes", "GraphQL", "PostgreSQL", "Cloud Infrastructure"],
    timeline: "16+ weeks",
    idealFor: "Enterprises and growing businesses needing sophisticated solutions tailored to complex requirements."
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Services We Provide
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We build robust apps through collaborative development that turns your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setSelectedService(index)}
                className="text-white font-medium hover:text-gray-300 transition-colors"
              >
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden flex flex-col pointer-events-auto shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between p-6 md:p-8 border-b border-gray-700 bg-gray-900">
                  <div className="flex-1 pr-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {services[selectedService].title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {services[selectedService].detailedDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                {/* Modal Body - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                  {/* Detailed Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-5">What's Included</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                      {services[selectedService].detailedFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-black/50 rounded-lg p-5 border border-gray-800 h-full flex flex-col"
                        >
                          <h5 className="text-white font-semibold mb-2 text-base">{feature.title}</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-5">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-3">
                      {services[selectedService].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & Ideal For */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/50 rounded-lg p-6 border border-gray-800 flex flex-col">
                      <h4 className="text-white font-semibold mb-3 text-lg">Timeline</h4>
                      <p className="text-gray-300 text-xl font-medium">{services[selectedService].timeline}</p>
                    </div>
                    <div className="bg-black/50 rounded-lg p-6 border border-gray-800 flex flex-col">
                      <h4 className="text-white font-semibold mb-3 text-lg">Ideal For</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{services[selectedService].idealFor}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-4">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        // Scroll to contact section
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-white hover:bg-gray-100 text-black font-bold px-10 py-4 rounded-lg transition-colors shadow-lg"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
