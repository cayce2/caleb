import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Welcome to Our Website!</h2>
          <p>This is the home page content. You can add any content you like here.</p>
          <p>Feel free to explore our services and contact us for any inquiries.</p>
          <Link to="/About" className='btn btn-primary'>Learn More</Link>
        </div>
        <div className="col-md-6">
          {/* Additional section on the right side */}
          <div className="mt-5">
            <h3>Why Choose Us?</h3>
            <p>We are committed to delivering high-quality solutions tailored to our clients' needs.</p>
            <p>Our team of experts ensures timely delivery and excellent customer support.</p>
            <Link to="/Services" className='btn btn-primary'>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
