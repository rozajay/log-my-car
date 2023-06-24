'use client'
import React, { ChangeEvent, useState } from 'react';
import Dropdown from './UI/Dropdown';
import { useNavigate } from 'react-router-dom'

interface FormData {
  carMake: string;
  carModel: string;
  carBadge: string;
  logContent: string | null;
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    carMake: '',
    carModel: '',
    carBadge: '',
    logContent: null,
  });
  const navigate = useNavigate()
  const handleChange = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'logContent') {
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/api/carlogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const responseBody = await response.text();
        navigate('/details', { state: responseBody });
      } else {
        console.log('Failed to submit car');
      }
    } catch (error) {
      console.log('Error occurred while submitting car', error);
    }
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
          onClick={() => setFormData({ ...formData, carMake: 'Subaru', carModel: 'Impreza', carBadge: 'Badge1' })}
        >
          Subaru Impreza
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => setFormData({ ...formData, carMake: 'Fiat', carModel: '500', carBadge: 'BadgeA' })}
        >
          Fiat 500
        </button>
      </div>
      <form className="flex flex-wrap" onSubmit={handleSubmit}>
        <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-4">
          <Dropdown
            label="Make"
            name="carMake"
            options={carMakes}
            value={formData.carMake}
            onChange={handleChange}
          />
        </div>
        {formData.carMake && (
          <div className="w-full md:w-auto md:flex-grow md:mr-4 mb-4">
            <Dropdown
              label="Model"
              name="carModel"
              options={carModels[formData.carMake]}
              value={formData.carModel}
              onChange={handleChange}
            />
          </div>
        )}
        {formData.carModel && (
          <div className="w-full md:w-auto md:flex-grow mb-4">
            <Dropdown
              label="Badge"
              name="carBadge"
              options={carBadges[formData.carMake]}
              value={formData.carBadge}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="w-full">
          <div className="text-xl font-bold mb-2">Upload logbook</div>
          <input type="logContent" name="logContent" className="mb-4" onChange={handleChange} />
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
