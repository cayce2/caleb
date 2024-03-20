// src/Services.js

import React, { useState } from 'react';

function Services() {
  const [services, setServices] = useState([
    { id: 1, name: 'Web Development', description: 'Custom web development solutions tailored to your needs.' },
    { id: 2, name: 'Mobile App Development', description: 'Building high-quality mobile apps for iOS and Android platforms.' },
    { id: 3, name: 'UI/UX Design', description: 'Creating intuitive and user-friendly interfaces for your applications.' },
    { id: 4, name: 'Digital Marketing', description: 'Promoting your brand and reaching your target audience through digital channels.' }
  ]);

  return (
    <div className="container mt-5">
      <h2>Our Services</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Services;
