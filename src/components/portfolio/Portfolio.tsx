import React from 'react';
import { portfolioItems } from '../../constants/portfolio';
import PortfolioCard from './PortfolioCard';
import PortfolioFilter from './PortfolioFilter';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const categories = ['all', ...new Set(portfolioItems.map((item) => item.category))];

  const filteredItems = React.useMemo(() => {
    return activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover our successful projects and innovative solutions
          </p>
        </div>

        <div className="mt-12">
          <PortfolioFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}