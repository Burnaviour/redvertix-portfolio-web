import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioItem } from '../../constants/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <item.icon className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          </div>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>

        <p className="mt-2 text-sm text-gray-600">{item.description}</p>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/60 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="transform rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}