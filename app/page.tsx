'use client'
import React, { ChangeEvent, useState } from 'react';
import Dropdown from './UI/Dropdown';

interface FormData {
  make: string;
  model: string;
  badge: string;
  file: File | null;
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    make: '',
    model: '',
    badge: '',
    file: null,
  });

  const handleChange = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'file') {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files![0],
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
  };

  const carMakes = ['Subaru', 'Fiat', 'Suzuki'];
  const carModels = {
    Subaru: ['Impreza', 'Outback', 'Forester', 'Crosstrek', 'Legacy'],
    Fiat: ['500', 'Panda', 'Tipo', 'Bravo', 'Spider'],
    Suzuki: ['Swift', 'Vitara', 'Ignis', 'S-Cross', 'Baleno'],
  };
  const carBadges = {
    Subaru: ['Badge1', 'Badge2', 'Badge3', 'Badge4', 'Badge5'],
    Fiat: ['BadgeA', 'BadgeB', 'BadgeC', 'BadgeD', 'BadgeE'],
    Suzuki: ['BadgeX', 'BadgeY', 'BadgeZ', 'BadgeW', 'BadgeV'],
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-2 text-center">Select your Broom broom</h1>
      <div className="mb-4 flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => setFormData({ ...formData, make: 'Subaru', model: 'Impreza', badge: 'Badge1' })}
        >
          Subaru Impreza
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => setFormData({ ...formData, make: 'Fiat', model: '500', badge: 'BadgeA' })}
        >
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
        {formData.make && (
          <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-4">
            <Dropdown
              label="Model"
              name="model"
              options={carModels[formData.make]}
              value={formData.model}
              onChange={handleChange}
            />
          </div>
        )}
        {formData.model && (
          <div className="w-full md:w-auto md:flex-grow mb-4">
            <Dropdown
              label="Badge"
              name="badge"
              options={carBadges[formData.make]}
              value={formData.badge}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="w-full">
          <div className="text-xl font-bold mb-2">Upload logbook</div>
          <input type="file" name="file" className="mb-4" onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Home;
