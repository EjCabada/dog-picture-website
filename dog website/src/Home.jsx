import React, { useState, useEffect } from 'react';
import './index.css';

function Home() {
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  const getBreedFromURL = (url) => {
    if (!url) return null;

    try {
      const parts = url.split('/');
      const breedPart = parts[4];
      if (breedPart && breedPart.includes('-')) {
        const breedParts = breedPart.split('-');
        return breedParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
      }
      return breedPart ? breedPart.charAt(0).toUpperCase() + breedPart.slice(1) : null;
    } catch (error) {
      console.error("Error parsing URL:", error);
      return "Unknown Breed";
    }
  };

  const fetchDogImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
   
        const errorText = await response.text(); 
        throw new Error(`HTTP error ${response.status}: ${response.statusText} - ${errorText}`);
      }
      const data = await response.json();
      if (data && data.message) { 
        setImageURL(data.message);
      } else {
        throw new Error("Invalid response format from API"); 
      }
    } catch (err) {
      setError(err);
      console.error("Error fetching dog image:", err); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div id="home">
      <h2>Random Picture of a Dog Below!</h2>
      <div id="fido">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {imageURL && !loading && !error && ( 
          <div id='img'>
            <img src={imageURL} alt="A random dog" style={{ maxWidth: '100%', height: 'auto' }} />
            <p>Breed: {getBreedFromURL(imageURL)}</p>
          </div>
        )}
      </div>
      <div id="buttonArea">
        <button id="generate-button" onClick={fetchDogImage}>
          Generate Another!
        </button>
      </div>
    </div>
  );
}

export default Home;