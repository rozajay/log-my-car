"use client"
import React, { ChangeEvent, useState } from 'react';

interface DropdownProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    badge: '',
    file: null
  });

  const handleChange = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'file') {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files![0]
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
  };

  const carMakes = ['Subaru', 'Fiat', 'Suzuki'];
  const carModels = ['Impreza', '500', 'Suzuki'];
  const carBadges = ['Subaru', 'Fiat', 'Suzuki'];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-2 text-center">Select your Broom broom</h1>
      <div className="mb-4 flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md" onClick={() => setFormData({ ...formData, make: 'Subaru', model: 'Impreza' })}>
          Subaru Impreza
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md" onClick={() => setFormData({ ...formData, make: 'Fiat', model: '500' })}>
          Fiat 500
        </button>
      </div>
      <form className="flex flex-wrap" onSubmit={handleSubmit}>
        <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-4">
          <Dropdown
            label="Make"
            name="make"
            options={carMakes}
            value={formData.make}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-4">
          <Dropdown
            label="Model"
            name="model"
            options={carModels}
            value={formData.model}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-auto md:flex-grow mb-4">
          <Dropdown
            label="Badge"
            name="badge"
            options={carBadges}
            value={formData.badge}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <div className="text-xl font-bold mb-2">Upload logbook</div>
          <input
            type="file"
            name="file"
            className="mb-4"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Home;

