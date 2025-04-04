
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  status?: string;
  bulletPoints?: string[];
  implementation?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0,
  status = "active",
  bulletPoints,
  implementation
}) => {
  return (
    <motion.div
      className="glass-card p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 bg-gradient-to-br from-eco-green to-eco-blue rounded-md flex items-center justify-center mb-4">
          <Icon className="text-white" size={24} />
        </div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          {status && (
            <span className={`text-xs px-2 py-1 rounded-full ${
              status === "active" ? "bg-green-100 text-green-800" : 
              status === "coming soon" ? "bg-yellow-100 text-yellow-800" : 
              "bg-blue-100 text-blue-800"
            }`}>
              {status}
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

        {implementation && implementation.length > 0 && (
          <div className="mt-auto">
            <h4 className="text-sm font-semibold text-eco-dark mb-2">Implementation</h4>
            <ul className="list-none space-y-1">
              {implementation.map((step, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-eco-green/10 rounded-full flex items-center justify-center text-xs text-eco-green">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-600">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
