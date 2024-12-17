import { Globe, ShoppingCart, Building2, Briefcase, LineChart, Users } from 'lucide-react';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'enterprise';
  technologies: string[];
  icon: any;
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'global-erp',
    title: 'Global ERP System',
    description: 'Enterprise resource planning system for a multinational manufacturing company.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'enterprise',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    icon: Building2
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'web',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
    icon: ShoppingCart
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard for business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'web',
    technologies: ['Vue.js', 'D3.js', 'Firebase', 'Google Analytics'],
    icon: LineChart
  },
  {
    id: 'hr-management',
    title: 'HR Management System',
    description: 'Comprehensive HR management solution for enterprise clients.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'enterprise',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'Azure'],
    icon: Users
  },
  {
    id: 'corporate-portal',
    title: 'Corporate Portal',
    description: 'Secure corporate portal with document management.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'web',
    technologies: ['React', 'SharePoint', '.NET', 'Azure AD'],
    icon: Globe
  },
  {
    id: 'crm-system',
    title: 'CRM System',
    description: 'Customer relationship management system with AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'enterprise',
    technologies: ['React Native', 'Node.js', 'TensorFlow', 'AWS'],
    icon: Briefcase
  }
];