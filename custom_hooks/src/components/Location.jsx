import React from "react";
import useCurrentLocation from "../hooks/useLocation";

const Location = () => {
  const { location, loading, error, getLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default Location;
