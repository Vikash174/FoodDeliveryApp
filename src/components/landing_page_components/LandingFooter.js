import { AppleStoreButton, GooglePlayStoreButton } from './LandingBody';

const LandingFooter = () => {
  return (
    <div className="bg-black text-white flex justify-evenly p-5">
      <Company />
      <Contact />
      <Legal />
      <AppDownloadButtons />
    </div>
  );
};

const Company = () => {
  return (
    <div className="p-2">
      <span className="text-[#93959f] font-semibold ">COMPANY</span>
      <ul>
        <li>About us</li>
        <li>Team</li>
        <li>Carrers</li>
        <li>Swiggy Blog</li>
        <li>Bug Bounty</li>
        <li>Swiggy One</li>
        <li>Swiggy Corporate</li>
        <li>Swiggy Genie</li>
        <li>Swiggy HDFC</li>
        <li>ESG</li>
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="p-2">
      <span className="text-[#93959f] font-semibold ">CONTACT</span>
      <ul>
        <li>Help & Support</li>
        <li>Partner with us</li>
        <li>Ride with us</li>
      </ul>
    </div>
  );
};

const Legal = () => {
  return (
    <div className="p-2">
      <span className="text-[#93959f] font-semibold ">LEGAL</span>
      <ul>
        <li>Terms & Condition</li>
        <li>Refund & Cancellation</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Offer Terms</li>
        <li>Phishing & Fraud</li>
        <li>Corporate-Swiggy Money Codes Terms and Conditons</li>
        <li>Corporate-Swiggy Discount Voucher Terms and Conditions</li>
      </ul>
    </div>
  );
};

const AppDownloadButtons = () => {
  return (
    <div className="p-5">
      <GooglePlayStoreButton />
      <AppleStoreButton />
    </div>
  );
};

export default LandingFooter;
