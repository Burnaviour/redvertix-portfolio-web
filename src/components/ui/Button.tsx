import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  icon: Icon,
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50',
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="ml-2 h-5 w-5" />}
    </button>
  );
}