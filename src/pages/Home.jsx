import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Available Properties</h1>
      <div className="row">
        {properties.map(property => (
          <div key={property.id} className="col-md-4">
            <div className="card mb-4">
              <img src={property.imageUrl} className="card-img-top" alt="Property" />
              <div className="card-body">
                <h5 className="card-title">{property.address}, {property.city}</h5>
                <p className="card-text">Price: ${property.price}</p>
                <a href={`/property/${property.id}`} className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
