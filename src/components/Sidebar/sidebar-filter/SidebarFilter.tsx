import { Input } from '@/components/MaterialTailwind';
import React, { useState } from 'react';

type SidebarFilterProps = {
  onPriceFilterChange: (minPrice: number, maxPrice: number) => void;
  onSizeFilterChange: (size: string) => void;
};

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  onPriceFilterChange,
  onSizeFilterChange,
}) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [size, setSize] = useState('');

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'minPrice') {
      setMinPrice(value);
    } else if (name === 'maxPrice') {
      setMaxPrice(value);
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (!isNaN(min) && !isNaN(max)) {
      onPriceFilterChange(min, max);
    }

    if (size) {
      onSizeFilterChange(size);
    }
  };

  return (
    <div className="mt-4 p-2 bg-white h-screen rousm">
      <h3 className="text-lg font-medium mb-2">Price Range</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row space-x-2 mb-4">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={minPrice}
            onChange={handlePriceChange}
            className="px-2 py-1 border rounded w-32"
          />
          <div className="w-72">
            <Input
              label="Username"
              type="number"
              name="minPrice"
              placeholder="Min Price"
              value={minPrice}
              onChange={handlePriceChange}
            />
          </div>
          <span className="text-gray-500">-</span>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handlePriceChange}
            className="px-2 py-1 border rounded w-32"
          />
        </div>
        <h3 className="text-lg font-medium mb-2">Size</h3>
        <select
          value={size}
          onChange={handleSizeChange}
          className="w-full px-2 py-1 border rounded"
        >
          <option value="">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default SidebarFilter;
