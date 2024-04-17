import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY_HERE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, like markers, info windows, etc. here */ }
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent);
