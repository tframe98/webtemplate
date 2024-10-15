import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property details', error);
      }
    };
    fetchPropertyDetails();
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1>{property.address}, {property.city}</h1>
      <img src={property.imageUrl} alt="Property" className="img-fluid mb-4" />
      <h3>Price: ${property.price}</h3>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>{property.description}</p>
      <button className="btn btn-primary mt-3">Contact Agent</button>
    </div>
  );
};

export default PropertyDetails;
