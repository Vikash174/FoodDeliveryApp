const LocationUnserviceable = () => {
  return (
    <div className="flex flex-col items-center p-5 m-5">
      <img
        className="w-96 "
        src="https://res.cloudinary.com/swiggy/image/upload/portal/m/location_unserviceable"
      />
      <span className="text-xl">Location Unserviceable! </span>
      <span>
        We don't have any services here for now. Try changing location
      </span>
    </div>
  );
};

export default LocationUnserviceable;
