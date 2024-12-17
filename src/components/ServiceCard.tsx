import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export default function ServiceCard({ title, description, icon: Icon, features }: ServiceCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative group bg-white p-6 rounded-lg shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-indigo-600 opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
      
      <div className="relative">
        <span className="rounded-lg inline-flex p-3 bg-red-50 text-red-600 ring-4 ring-white">
          <Icon className={`h-6 w-6 transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
        </span>
        
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
          
          <div className={`mt-4 transition-all duration-300 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}