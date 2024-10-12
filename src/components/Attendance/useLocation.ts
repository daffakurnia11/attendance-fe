import React from "react";

export const useLocation = () =>  {
  const [latitude, setLatitude] = React.useState<number | null>(null);
  const [longitude, setLongitude] = React.useState<number | null>(null);
  const [locationError, setLocationError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    const success = (position: GeolocationPosition) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setLocationError(null);
    };

    const handleError = (err: GeolocationPositionError) => {
      switch (err.code) {
        case err.PERMISSION_DENIED:
          setLocationError("Permission denied. Please enable location access.");
          break;
        case err.POSITION_UNAVAILABLE:
          setLocationError("Position unavailable. Try again later.");
          break;
        case err.TIMEOUT:
          setLocationError("Request timed out. Please try again.");
          break;
        default:
          setLocationError("Unable to retrieve your location.");
          break;
      }
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(success, handleError, options);
  }, []);

  return { latitude, longitude, locationError };
}
