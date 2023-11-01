const Adderess = () => {
  return (
    <div className="adderess-container">
      <AdderessTitle />
      <ResidentType />
      <ResidentAdderess />
      <DeliveryTime />
      <ChangeAdderess />
    </div>
  );
};

const AdderessTitle = () => {
  return <h3>Delivery Adderess</h3>;
};

const ResidentType = () => {
  return <h4>Hotel</h4>;
};

const ResidentAdderess = () => {
  return (
    <span>
      0000,Clover Park, Viman Nagar, Pune, Maharashtra, India (Phoenix
      Marketcity)
    </span>
  );
};

const DeliveryTime = () => {
  return <h5>74 MINS</h5>;
};

const ChangeAdderess = () => {
  return <button id="change-adderess-btn">CHANGE</button>;
};

export default Adderess;
